// Shared show visibility for /shows and /links.
// Every show in links.json must include eventDate in YYYY-MM-DD format.
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
    return shows.filter(show => show.active !== false &&
      (!show.eventDate || show.eventDate >= today));
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
