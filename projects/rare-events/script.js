const slider = document.querySelector("#primary-count");
const controls = document.querySelector("#explorer-controls");

if (slider && controls) {
  const pBar = 0.015 * (1 - Math.exp(-5)) / 5;
  const meanP2 = 0.015 ** 2 * (1 - Math.exp(-10)) / 10;
  const varianceP = meanP2 - pBar ** 2;
  const countingVariance = pBar * (1 - pBar);
  const countRelativeAt1000 = Math.sqrt(countingVariance / 1000) / pBar;
  const conditionalRelativeAt1000 = Math.sqrt(varianceP / 1000) / pBar;
  const countError = document.querySelector("#count-error");
  const conditionalError = document.querySelector("#conditional-error");
  const countFill = document.querySelector("#count-fill");
  const conditionalFill = document.querySelector("#conditional-fill");
  const countLabel = document.querySelector("#primary-count-label");
  const displayedPrimaryCount = document.querySelector("#displayed-primary-count");
  const expectedHits = document.querySelector("#expected-hits");

  const formatCount = value => new Intl.NumberFormat("en-US").format(value);
  const formatRelativeError = value => {
    const percent = value * 100;
    return `${percent < 1 ? percent.toFixed(2) : percent.toFixed(1)}%`;
  };

  function updateExplorer() {
    const n = 10 ** Number(slider.value);
    const scale = Math.sqrt(1000 / n);
    const countRelative = countRelativeAt1000 * scale;
    const conditionalRelative = conditionalRelativeAt1000 * scale;
    const expected = n * pBar;

    countLabel.value = formatCount(n);
    countLabel.textContent = formatCount(n);
    displayedPrimaryCount.textContent = formatCount(n);
    slider.setAttribute("aria-valuetext", `${formatCount(n)} sampled events`);
    countError.textContent = formatRelativeError(countRelative);
    conditionalError.textContent = formatRelativeError(conditionalRelative);
    countFill.style.width = "100%";
    conditionalFill.style.width = `${Math.max(3, conditionalRelative / countRelative * 100)}%`;
    expectedHits.textContent = `about ${new Intl.NumberFormat("en-US", { maximumFractionDigits: expected < 10 ? 1 : 0 }).format(expected)}`;
  }

  slider.addEventListener("input", updateExplorer);
  controls.hidden = false;
  updateExplorer();
}
