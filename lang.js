(function () {
  "use strict";

  var STORAGE_KEY = "wedding-lang";
  var SUPPORTED = ["fr", "zh", "ru"];


  // ---------- Language switching ----------
  function applyLang(lang) {

    if (SUPPORTED.indexOf(lang) === -1) return;

    document.body.setAttribute("data-lang", lang);


    // Update active language button
    document.querySelectorAll(".nav-language button").forEach(function (btn) {

      btn.classList.toggle(
        "active",
        btn.getAttribute("data-lang") === lang
      );

    });


    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // Ignore storage errors
    }

  }



  // ---------- Initialisation ----------
  document.addEventListener("DOMContentLoaded", function () {


    // Restore saved language
    var saved = null;

    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      // Ignore
    }


    if (saved) {
      applyLang(saved);
    }



    // Language buttons
    document.querySelectorAll(".nav-language button").forEach(function (btn) {

      btn.addEventListener("click", function () {

        applyLang(btn.getAttribute("data-lang"));

      });

    });



    // ---------- Mobile navigation ----------

    var menuToggle = document.getElementById("menu-toggle");
    var navLinks = document.getElementById("nav-links");


    if (menuToggle && navLinks) {


      menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("open");

      });



      // Close menu after selecting a section
      document.querySelectorAll(".nav-links a").forEach(function (link) {

        link.addEventListener("click", function () {

          navLinks.classList.remove("open");

        });

      });


    }


  });




  // ---------- Add to calendar (.ics) ----------

  function buildIcs() {

    var pad = function (n) {
      return String(n).padStart(2, "0");
    };


    var now = new Date();


    var stamp =
      now.getUTCFullYear() +
      pad(now.getUTCMonth() + 1) +
      pad(now.getUTCDate()) +
      "T" +
      pad(now.getUTCHours()) +
      pad(now.getUTCMinutes()) +
      pad(now.getUTCSeconds()) +
      "Z";



    var lines = [

      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Anton & Tongyu Wedding//FR",

      "BEGIN:VEVENT",

      "UID:anton-tongyu-wedding-2026@wedding-site",

      "DTSTAMP:" + stamp,

      "DTSTART:20261003T140000Z",

      "DTEND:20261003T220000Z",

      "SUMMARY:Mariage d'Anton & Tongyu / 安东与桐雨的婚礼 / Свадьба Антона и Тонью",

      "DESCRIPTION:Ceremonie civile a partir de 16h. Programme complet sur le site du mariage.",

      "LOCATION:34 Rue de Voisins\\, 78430 Louveciennes\\, France",

      "END:VEVENT",

      "END:VCALENDAR"

    ];


    return lines.join("\r\n");

  }




  document.addEventListener("DOMContentLoaded", function () {


    var calBtn = document.getElementById("add-to-calendar");


    if (!calBtn) return;



    calBtn.addEventListener("click", function (e) {


      e.preventDefault();


      var blob = new Blob(
        [buildIcs()],
        { type: "text/calendar;charset=utf-8" }
      );


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
