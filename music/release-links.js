(() => {
  const platforms = [
  {
    "key": "spotify",
    "label": "Spotify",
    "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M12 1.5A10.5 10.5 0 1 0 12 22.5 10.5 10.5 0 0 0 12 1.5Zm4.82 15.15a.65.65 0 0 1-.9.22c-2.46-1.5-5.56-1.84-9.2-1.01a.65.65 0 1 1-.29-1.27c3.98-.9 7.4-.51 10.17 1.18.31.19.41.58.22.88Zm1.29-2.87a.81.81 0 0 1-1.12.27c-2.82-1.73-7.12-2.23-10.45-1.22a.81.81 0 1 1-.47-1.55c3.81-1.16 8.55-.6 11.77 1.37.38.23.5.74.27 1.13Zm.11-2.99C14.84 8.78 9.27 8.6 6.04 9.57a.98.98 0 1 1-.56-1.87c3.71-1.11 9.86-.9 13.74 1.4a.98.98 0 0 1-1 1.69Z\"/></svg>"
  },
  {
    "key": "youtubeId",
    "label": "YouTube",
    "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z\"/></svg>"
  },
  {
    "key": "youtubeMusic",
    "label": "YouTube Music",
    "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"m10 8 6 4-6 4z\"/></svg>"
  },
  {
    "key": "appleMusic",
    "label": "Apple Music",
    "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M18.7 3.2c-1.5.1-3.1.5-4.5.9-1.2.3-2.5.6-3.8.8v11.3a3.7 3.7 0 0 0-2.2-.2c-2.1.4-3.6 1.9-3.3 3.4.3 1.5 2.1 2.2 4.1 1.8 1.9-.4 3.2-1.7 3.2-3.3V8.1l5.7-1.4v7.4a3.7 3.7 0 0 0-2.2-.2c-2.1.4-3.6 1.9-3.3 3.4.3 1.5 2.1 2.2 4.1 1.8 1.9-.4 3.2-1.7 3.2-3.3V3.1l-.8.1Z\"/></svg>"
  },
  {
    "key": "amazonMusic",
    "label": "Amazon Music",
    "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><text x=\"4.5\" y=\"16.2\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"bold\" fill=\"currentColor\">a</text><path d=\"M6 18.1c3.3 2.2 8 2.4 12.3-.3M15.8 17.6l2.9-.4-.7 2.7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"
  },
  {
    "key": "deezer",
    "label": "Deezer",
    "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M2 17h4v4H2zm5.2-3h4v7h-4zm5.2-4h4v11h-4zm5.2-6h4v17h-4zM2 12h4v4H2zm5.2-3h4v4h-4zm5.2-4h4v4h-4zm5.2-4h4v2h-4z\"/></svg>"
  },
  {
    "key": "tidal",
    "label": "Tidal",
    "icon": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"m0 9 4-4 4 4-4 4zm8 0 4-4 4 4-4 4zm8 0 4-4 4 4-4 4zm-8 8 4-4 4 4-4 4z\"/></svg>"
  },
  {
    "key": "itunes",
    "label": "iTunes Store",
    "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M15.4 5.5v10.1c-.45-.5-1.22-.65-2.07-.45-1.23.3-2.04 1.3-1.82 2.22.22.91 1.36 1.3 2.59 1 1.1-.27 1.85-1.1 1.85-2.05V9.3l-5.7 1.2v6.7c-.47-.5-1.23-.64-2.07-.44-1.23.3-2.04 1.3-1.82 2.21.22.91 1.36 1.3 2.59 1 1.1-.27 1.85-1.1 1.85-2.05V7.75l5.15-1.12\" fill=\"currentColor\"/></svg>"
  }
];

  window.ChebroletReleaseLinks = {
    render(release, container, className, youtubePath) {
      for (const { key, label, icon } of platforms) {
        if (key !== "spotify" && key !== "youtubeId") continue;
        const value = release[key];
        if (!value) continue;

        const link = document.createElement("a");
        link.className = className;
        link.title = label;
        link.setAttribute("aria-label", `${release.title} en ${label}`);
        link.innerHTML = icon;

        if (key === "youtubeId") {
          link.href = `${youtubePath}?v=${encodeURIComponent(value)}`;
        } else {
          link.href = value;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
        }

        container.appendChild(link);
      }
    }
  };
})();
