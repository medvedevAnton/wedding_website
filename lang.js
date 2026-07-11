(function () {
  "use strict";

  var STORAGE_KEY = "wedding-lang";
  var SUPPORTED = ["fr", "zh", "ru"];

  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) return;
    document.body.setAttribute("data-lang", lang);
    document.querySelectorAll(".lang-switcher button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore storage errors (private browsing, etc.) */
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      /* ignore */
    }
    if (saved) applyLang(saved);

    document.querySelectorAll(".lang-switcher button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });
  });

  // ---------- Add to calendar (.ics) ----------
  function buildIcs() {
    var pad = function (n) { return String(n).padStart(2, "0"); };
    var now = new Date();
    var stamp =
      now.getUTCFullYear() +
      pad(now.getUTCMonth() + 1) +
      pad(now.getUTCDate()) + "T" +
      pad(now.getUTCHours()) +
      pad(now.getUTCMinutes()) +
      pad(now.getUTCSeconds()) + "Z";

    var lines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Anton & Tongyu Wedding//FR",
      "BEGIN:VEVENT",
      "UID:anton-tongyu-wedding-2026@wedding-site",
      "DTSTAMP:" + stamp,
      "DTSTART:20261003T140000Z",
      "DTEND:20261003T220000Z",
      "SUMMARY:Mariage d'Anton & Tongyu / 安东与桐雨的婚礼 / Свадьба Антона и Тоньи",
      "DESCRIPTION:Ceremonie civile a partir de 16h. Programme complet sur le site du mariage.",
      "LOCATION:34 Rue de Voisins\\, 78430 Louveciennes\\, France",
      "END:VEVENT",
      "END:VCALENDAR",
    ];
    return lines.join("\r\n");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var calBtn = document.getElementById("add-to-calendar");
    if (!calBtn) return;
    calBtn.addEventListener("click", function (e) {
      e.preventDefault();
      var blob = new Blob([buildIcs()], { type: "text/calendar;charset=utf-8" });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "mariage-anton-tongyu.ics";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  });
})();
