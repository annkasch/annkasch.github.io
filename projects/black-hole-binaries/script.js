(() => {
  const progress = document.querySelector('.reading-progress');
  if (!progress) return;

  let scheduled = false;
  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const fraction = scrollable > 0 ? window.scrollY / scrollable : 0;
    progress.style.transform = `scaleX(${Math.max(0, Math.min(1, fraction))})`;
    scheduled = false;
  };
  const scheduleUpdate = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(updateProgress);
  };

  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('load', scheduleUpdate);
  updateProgress();
})();

(() => {
  const audio = document.getElementById('chirp-audio');
  const frequency = document.getElementById('audio-frequency');
  const note = document.getElementById('audio-note');
  const cursor = document.getElementById('waveform-cursor');
  if (!audio || !frequency || !note || !cursor) return;

  document.querySelector('.frequency-control').hidden = false;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  // The WAV contains three 3440-sample chirps at 16384 Hz, separated by silence.
  // Keep the cursor tied to this audio only; the videos have independent timing.
  const sampleRate = 16384;
  const duration = 3440 / sampleRate;
  const leadingSilence = 2458 / sampleRate;
  const gap = 9011 / sampleRate;
  let frame = null;

  function drawCursor() {
    frame = null;
    const elapsed = audio.currentTime - leadingSilence;
    const repeat = Math.floor(elapsed / (duration + gap));
    const phase = elapsed - repeat * (duration + gap);
    const active = !audio.paused && !reducedMotion.matches && repeat >= 0 && repeat < 3 && phase <= duration;
    cursor.classList.toggle('is-active', active);
    if (active) {
      const x = 64 + 914 * phase / duration;
      cursor.setAttribute('x1', x.toFixed(2));
      cursor.setAttribute('x2', x.toFixed(2));
    }
    if (!audio.paused && !reducedMotion.matches) frame = window.requestAnimationFrame(drawCursor);
  }

  function stopCursor() {
    if (frame !== null) window.cancelAnimationFrame(frame);
    frame = null;
    cursor.classList.remove('is-active');
  }

  function startCursor() {
    stopCursor();
    drawCursor();
  }

  frequency.addEventListener('change', () => {
    audio.pause();
    audio.src = frequency.value === 'original'
      ? 'assets/gw150914-model-original.wav'
      : 'assets/gw150914-model-shifted.wav';
    audio.load();
    note.textContent = frequency.value === 'original'
      ? 'Three repeats at the original waveform frequencies. The low-pitched chirp may be easier to hear with headphones.'
      : 'Three repeats, with frequencies raised by 400 Hz to make the low-pitched chirp easier to hear.';
  });

  audio.addEventListener('play', startCursor);
  audio.addEventListener('pause', stopCursor);
  audio.addEventListener('ended', stopCursor);
  reducedMotion.addEventListener('change', startCursor);

  const media = Array.from(document.querySelectorAll('audio, video'));
  media.forEach(item => item.addEventListener('play', () => {
    media.forEach(other => { if (other !== item) other.pause(); });
  }));
})();

(() => {
  // YouTube requires an HTTP referrer. Local-file drafts keep the watch link.
  if (!['http:', 'https:'].includes(window.location.protocol)) return;
  const preview = document.querySelector('[data-youtube-embed]');
  if (!preview) return;
  const player = document.createElement('iframe');
  player.src = preview.dataset.youtubeEmbed;
  player.title = 'LIGO interferometer animation';
  player.width = '960';
  player.height = '540';
  player.loading = 'lazy';
  player.referrerPolicy = 'strict-origin-when-cross-origin';
  player.allow = 'encrypted-media; fullscreen; picture-in-picture';
  player.allowFullscreen = true;
  preview.replaceWith(player);
})();
