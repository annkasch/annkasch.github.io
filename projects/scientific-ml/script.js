"use strict";

// Sequential timing budgets in milliseconds; illustrative, not measured.
const scenarios = {
  data: { data: 70, gpu: 20, network: 10, note: "Data loading still takes 70 ms." },
  network: { data: 10, gpu: 30, network: 60, note: "Communication still takes 60 ms." },
  gpu: { data: 10, gpu: 80, network: 10, note: "Most of the original step is GPU work, so speeding it up has a larger effect." }
};

const explorer = document.getElementById("bottleneck-explorer");
const speedInput = document.getElementById("gpu-speed");

function formatTime(value) {
  return Number(value.toFixed(1)).toString();
}

function updateBudget() {
  const selected = explorer.querySelector('input[name="scenario"]:checked').value;
  const budget = scenarios[selected];
  const speed = Number(speedInput.value);
  const gpuTime = budget.gpu / speed;
  const total = budget.data + gpuTime + budget.network;

  document.getElementById("gpu-speed-value").value = `${speed}×`;
  speedInput.setAttribute("aria-valuetext", `${speed} times faster GPU work`);
  document.getElementById("new-time").textContent = `${formatTime(total)} ms`;
  document.getElementById("data-budget").textContent = `${budget.data} ms`;
  document.getElementById("gpu-budget").textContent = `${budget.gpu} → ${formatTime(gpuTime)} ms`;
  document.getElementById("network-budget").textContent = `${budget.network} ms`;
  document.getElementById("total-speedup").textContent = `${(100 / total).toFixed(2)}×`;
  document.getElementById("experiment-explanation").textContent = speed === 1
    ? `No GPU speedup: the step remains 100 ms, including ${budget.data} ms of data loading, ${budget.gpu} ms of GPU work, and ${budget.network} ms of communication.`
    : `GPU work is ${speed}× faster, but the whole step falls from 100 to ${formatTime(total)} ms. ${budget.note}`;

  // Both bars use the original 100 ms scale, so total length reflects elapsed time.
  for (const [id, gpu] of [["baseline-bar", budget.gpu], ["optimized-bar", gpuTime]]) {
    const bar = document.getElementById(id);
    bar.querySelector(".data").style.width = `${budget.data}%`;
    bar.querySelector(".gpu").style.width = `${gpu}%`;
    bar.querySelector(".network").style.width = `${budget.network}%`;
  }
}

if (explorer && speedInput) {
  updateBudget();
  explorer.hidden = false;
  speedInput.addEventListener("input", updateBudget);
  explorer.querySelectorAll('input[name="scenario"]').forEach(input => {
    input.addEventListener("change", updateBudget);
  });
}

const resolutionControls = document.getElementById("resolution-controls");

function memorySize(bytes) {
  return bytes >= 2 ** 30
    ? { value: bytes / 2 ** 30, unit: "GiB" }
    : { value: bytes / 2 ** 20, unit: "MiB" };
}

function updateVolumeGrid(side) {
  // A schematic: each drawn division represents 64 cells along an edge.
  const divisions = side / 64;
  const faces = [
    [[150, 20], [270, 80], [150, 140], [30, 80]],
    [[30, 80], [150, 140], [150, 250], [30, 190]],
    [[150, 140], [270, 80], [270, 190], [150, 250]]
  ];
  const between = (a, b, fraction) => a.map((v, i) => v + (b[i] - v) * fraction).join(" ");
  const paths = document.getElementById("volume-lines").querySelectorAll("path");
  faces.forEach(([a, b, c, d], index) => {
    const lines = [];
    for (let i = 1; i < divisions; i++) {
      const t = i / divisions;
      lines.push(`M${between(a, d, t)} L${between(b, c, t)}`);
      lines.push(`M${between(a, b, t)} L${between(d, c, t)}`);
    }
    paths[index].setAttribute("d", lines.join(" "));
  });
}

function updateResolution() {
  const side = Number(resolutionControls.querySelector('input[name="resolution"]:checked').value);
  const cells = side ** 3;
  const bytes = cells * 8 * 4;
  const memory = memorySize(bytes);
  const nextMemory = memorySize(bytes * 8);
  const cellCount = cells >= 1e9
    ? `${(cells / 1e9).toPrecision(3)} billion`
    : `${(cells / 1e6).toPrecision(3)} million`;

  document.getElementById("state-memory").textContent = memory.value;
  document.getElementById("state-unit").textContent = memory.unit;
  document.getElementById("cell-count").textContent = `${cellCount} cells`;
  document.getElementById("memory-formula").textContent = `${side.toLocaleString("en-US")}³ cells × 8 quantities × 4 bytes`;
  document.getElementById("resolution-consequence").textContent = `Double the resolution to ${(side * 2).toLocaleString("en-US")} cells per direction and this becomes ${nextMemory.value} ${nextMemory.unit}. Twice the resolution means eight times the data.`;
  updateVolumeGrid(side);
}

if (resolutionControls) {
  updateResolution();
  resolutionControls.hidden = false;
  resolutionControls.querySelectorAll('input[name="resolution"]').forEach(input => {
    input.addEventListener("change", updateResolution);
  });
}
