(() => {
  const container = document.getElementById('argentina-2077-release');
  const platformNamesOnly = container.hasAttribute('data-platform-names-only');
  const listenPrefix = platformNamesOnly ? '' : 'Escuchar en ';
  const buyPrefix = platformNamesOnly ? '' : 'Comprar en ';
  container.innerHTML = `
    <article class="album-card presave-card" aria-labelledby="argentina-heading">
      <img class="album-cover" src="https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2F3648973--B0900965-CFE0-4E52-9B4CE9B7B22E241B--0--712870--cover.png?fm=jpg&amp;q=75&amp;s=5ed1124435889603bb7aec536373d749&amp;w=800" alt="Portada de Argentina 2077: bandera argentina roja y negra" width="800" height="800">
      <div class="album-info">
        <span class="album-eyebrow"><time datetime="2026-11-20">20.11.2026</time></span>
        <h3 id="argentina-heading">ARGENTINA 2077 <span class="chapter-subtitle">Capítulo I</span></h3>
        <div class="album-links">
          <a class="album-platform-button" href="https://open.spotify.com/album/42sNjjAKG0LVpT2lwMSNp6" target="_blank" rel="noopener noreferrer">
            <span class="album-platform-icon"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1.5A10.5 10.5 0 1 0 12 22.5 10.5 10.5 0 0 0 12 1.5Zm4.82 15.15a.65.65 0 0 1-.9.22c-2.46-1.5-5.56-1.84-9.2-1.01a.65.65 0 1 1-.29-1.27c3.98-.9 7.4-.51 10.17 1.18.31.19.41.58.22.88Zm1.29-2.87a.81.81 0 0 1-1.12.27c-2.82-1.73-7.12-2.23-10.45-1.22a.81.81 0 1 1-.47-1.55c3.81-1.16 8.55-.6 11.77 1.37.38.23.5.74.27 1.13Zm.11-2.99C14.84 8.78 9.27 8.6 6.04 9.57a.98.98 0 1 1-.56-1.87c3.71-1.11 9.86-.9 13.74 1.4a.98.98 0 0 1-1 1.69Z"/></svg></span>
            <span class="album-platform-copy"><strong>${listenPrefix}Spotify</strong></span>
          </a>
          <a class="album-platform-button" href="https://music.apple.com/ar/album/argentina-2077-cap%C3%ADtulo-i-ep/6827168191" target="_blank" rel="noopener noreferrer">
            <span class="album-platform-icon"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.7 3.2c-1.5.1-3.1.5-4.5.9-1.2.3-2.5.6-3.8.8v11.3a3.7 3.7 0 0 0-2.2-.2c-2.1.4-3.6 1.9-3.3 3.4.3 1.5 2.1 2.2 4.1 1.8 1.9-.4 3.2-1.7 3.2-3.3V8.1l5.7-1.4v7.4a3.7 3.7 0 0 0-2.2-.2c-2.1.4-3.6 1.9-3.3 3.4.3 1.5 2.1 2.2 4.1 1.8 1.9-.4 3.2-1.7 3.2-3.3V3.1l-.8.1Z"/></svg></span>
            <span class="album-platform-copy"><strong>${listenPrefix}Apple Music</strong></span>
          </a>
          <a class="album-platform-button" href="https://music.apple.com/ar/album/argentina-2077-cap%C3%ADtulo-i-ep/6827168191?app=itunes" target="_blank" rel="noopener noreferrer">
            <span class="album-platform-icon"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8"/><path d="M15.4 5.5v10.1c-.45-.5-1.22-.65-2.07-.45-1.23.3-2.04 1.3-1.82 2.22.22.91 1.36 1.3 2.59 1 1.1-.27 1.85-1.1 1.85-2.05V9.3l-5.7 1.2v6.7c-.47-.5-1.23-.64-2.07-.44-1.23.3-2.04 1.3-1.82 2.21.22.91 1.36 1.3 2.59 1 1.1-.27 1.85-1.1 1.85-2.05V7.75l5.15-1.12" fill="currentColor"/></svg></span>
            <span class="album-platform-copy"><strong>${buyPrefix}iTunes Store</strong></span>
          </a>
          <a class="album-platform-button" href="https://music.youtube.com/browse/MPREb_56Q1k2e5c0f" target="_blank" rel="noopener noreferrer">
            <span class="album-platform-icon"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z"/></svg></span>
            <span class="album-platform-copy"><strong>${listenPrefix}YouTube Music</strong></span>
          </a>
          <a class="album-platform-button" href="https://www.youtube.com/playlist?list=OLAK5uy_ns0y0ffeWFcMXfxzlSFMZ4mRpJJq8fW7A" target="_blank" rel="noopener noreferrer">
            <span class="album-platform-icon"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z"/></svg></span>
            <span class="album-platform-copy"><strong>${listenPrefix}YouTube</strong></span>
          </a>
          <a class="album-platform-button" href="https://music.amazon.com/albums/B0HPBQSJVT" target="_blank" rel="noopener noreferrer">
            <span class="album-platform-icon"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><text x="4.5" y="16.2" font-family="Arial,sans-serif" font-size="17" font-weight="bold" fill="currentColor">a</text><path d="M6 18.1c3.3 2.2 8 2.4 12.3-.3M15.8 17.6l2.9-.4-.7 2.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            <span class="album-platform-copy"><strong>${listenPrefix}Amazon Music</strong></span>
          </a>
        </div>
      </div>
    </article>
  `;
})();
