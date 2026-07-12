(function () {
  "use strict";

  var STORAGE_KEY = "wedding-lang";
  var SUPPORTED = ["fr", "zh", "ru"];


  // ================= LANGUAGE =================

  function applyLang(lang) {

    if (SUPPORTED.indexOf(lang) === -1) return;

    document.body.setAttribute("data-lang", lang);


    document.querySelectorAll(".nav-language button")
      .forEach(function(btn){

        btn.classList.toggle(
          "active",
          btn.getAttribute("data-lang") === lang
        );

      });


    try {
      localStorage.setItem(STORAGE_KEY, lang);
    }
    catch(e){}

  }



  document.addEventListener("DOMContentLoaded", function(){


    // restore language

    var saved=null;

    try {
      saved=localStorage.getItem(STORAGE_KEY);
    }
    catch(e){}


    if(saved){
      applyLang(saved);
    }



    // language buttons

    document
      .querySelectorAll(".nav-language button")
      .forEach(function(btn){


        btn.addEventListener("click",function(){

          applyLang(
            btn.getAttribute("data-lang")
          );


          // close mobile menu after language change

          var nav=document.getElementById("nav-links");

          if(nav){
            nav.classList.remove("open");
          }


        });


      });




    // ================= BURGER =================


    var menuBtn=document.getElementById("menu-toggle");
    var nav=document.getElementById("nav-links");


    if(menuBtn && nav){


      menuBtn.addEventListener("click",function(){


        nav.classList.toggle("open");


        menuBtn.classList.toggle("active");


      });


    }



    // close menu when clicking a link

    document
      .querySelectorAll(".nav-links a")
      .forEach(function(link){


        link.addEventListener("click",function(){


          if(nav){
            nav.classList.remove("open");
          }


        });


      });




    // ================= CALENDAR =================


    var calBtn=document.getElementById("add-to-calendar");


    if(calBtn){


      calBtn.addEventListener("click",function(e){

        e.preventDefault();


        var blob=new Blob(
          [buildIcs()],
          {
            type:"text/calendar;charset=utf-8"
          }
        );


        var url=URL.createObjectURL(blob);


        var a=document.createElement("a");

        a.href=url;

        a.download="mariage-anton-tongyu.ics";


        document.body.appendChild(a);

        a.click();

        document.body.removeChild(a);


        URL.revokeObjectURL(url);


      });


    }


  });






  function buildIcs(){


    var pad=function(n){
      return String(n).padStart(2,"0");
    };


    var now=new Date();


    var stamp=
      now.getUTCFullYear()+
      pad(now.getUTCMonth()+1)+
      pad(now.getUTCDate())+
      "T"+
      pad(now.getUTCHours())+
      pad(now.getUTCMinutes())+
      pad(now.getUTCSeconds())+
      "Z";



    return [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Anton & Tongyu Wedding//FR",
      "BEGIN:VEVENT",
      "UID:anton-tongyu-wedding-2026@wedding-site",
      "DTSTAMP:"+stamp,
      "DTSTART:20261003T140000Z",
      "DTEND:20261003T220000Z",
      "SUMMARY:Mariage Anton & Tongyu",
      "DESCRIPTION:Ceremonie civile a partir de 16h.",
      "LOCATION:34 Rue de Voisins\\,78430 Louveciennes\\,France",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");


  }



})();
