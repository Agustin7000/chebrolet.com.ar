(() => {
  const container = document.getElementById('argentina-2077-release');
  container.innerHTML = `
    <article class="album-card presave-card" aria-labelledby="argentina-heading">
      <img class="album-cover" src="https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2F3648973--B0900965-CFE0-4E52-9B4CE9B7B22E241B--0--712870--cover.png?fm=jpg&amp;q=75&amp;s=5ed1124435889603bb7aec536373d749&amp;w=800" alt="Portada de Argentina 2077: bandera argentina roja y negra" width="800" height="800">
      <div class="album-info">
        <span class="album-eyebrow"><time datetime="2026-11-20">20.11.2026</time></span>
        <h3 id="argentina-heading">ARGENTINA 2077 <span class="chapter-subtitle">Capítulo I</span></h3>
        <div class="album-links">
          <a class="album-platform-button" href="https://open.spotify.com/intl-es/album/42sNjjAKG0LVpT2lwMSNp6" target="_blank" rel="noopener noreferrer">
            <span class="album-platform-icon"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1.5A10.5 10.5 0 1 0 12 22.5 10.5 10.5 0 0 0 12 1.5Zm4.82 15.15a.65.65 0 0 1-.9.22c-2.46-1.5-5.56-1.84-9.2-1.01a.65.65 0 1 1-.29-1.27c3.98-.9 7.4-.51 10.17 1.18.31.19.41.58.22.88Zm1.29-2.87a.81.81 0 0 1-1.12.27c-2.82-1.73-7.12-2.23-10.45-1.22a.81.81 0 1 1-.47-1.55c3.81-1.16 8.55-.6 11.77 1.37.38.23.5.74.27 1.13Zm.11-2.99C14.84 8.78 9.27 8.6 6.04 9.57a.98.98 0 1 1-.56-1.87c3.71-1.11 9.86-.9 13.74 1.4a.98.98 0 0 1-1 1.69Z"/></svg></span>
            <span class="album-platform-copy"><strong data-release-action>Preguardar en Spotify</strong></span>
          </a>
        </div>
      </div>
    </article>
  `;

  // Spotify uses this album URL for both the pre-save and the EP.
  const releaseAt = Date.parse('2026-11-20T00:00:00-03:00');
  const action = container.querySelector('[data-release-action]');
  const maxTimeout = 2_147_483_647;
  let timer;

  function updateAction() {
    clearTimeout(timer);
    const remaining = releaseAt - Date.now();
    if (remaining <= 0) {
      action.textContent = 'Escuchar en Spotify';
      return;
    }
    timer = setTimeout(updateAction, Math.min(remaining, maxTimeout));
  }

  document.addEventListener('visibilitychange', updateAction);
  window.addEventListener('pageshow', updateAction);
  updateAction();
})();
