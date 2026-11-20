// Shared show visibility for /shows and /links.
// Dates use YYYY-MM-DD. Set visibleThrough to keep a show listed through a later day.
(function () {
  'use strict';
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Argentina/Buenos_Aires',
    year: 'numeric', month: '2-digit', day: '2-digit'
  });

  function argentinaDay(now) {
    const parts = {};
    formatter.formatToParts(now).forEach(part => { parts[part.type] = part.value; });
    return parts.year + '-' + parts.month + '-' + parts.day;
  }

  function upcoming(shows, now = new Date()) {
    const today = argentinaDay(now);
    return shows.filter(show => {
      const lastVisibleDay = show.visibleThrough ?? show.eventDate;
      return show.active !== false && (!lastVisibleDay || lastVisibleDay >= today);
    });
  }

  function watch(shows, render) {
    let previousDay;
    let timer;
    function refresh() {
      clearTimeout(timer);
      const now = new Date();
      const day = argentinaDay(now);
      if (day !== previousDay) {
        render(upcoming(shows, now));
        previousDay = day;
      }
      // Argentina uses UTC-03:00. Refresh at its next midnight.
      const nextMidnight = Date.parse(day + 'T00:00:00-03:00') + 86400000;
      timer = setTimeout(refresh, Math.max(1, nextMidnight - now.getTime()));
    }
    document.addEventListener('visibilitychange', refresh);
    window.addEventListener('pageshow', refresh);
    refresh();
  }

  window.ChebroletShows = { upcoming, watch };
}());
