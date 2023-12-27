javascript:(function () { 
  alert("Script Added");
  var counter = 0, intervalId, checkCalendar, greenDay;
  
  function lC() {
    if (counter < 500) {
      checkCalendar = document.getElementById("ui-datepicker-div");
      greenDay = checkCalendar.querySelectorAll(".greenday");
      if (greenDay.length > 0) {
        console.log("Dates Found, Script terminated...");
        clearTimeout(intervalId);
      } else { 
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://aditya4478.github.io/Visa-Scheduling-Script/index.js";
        script.onload = function () {
          counter++;
          intervalId = setTimeout(lC, 6000);
        };
        document.head.appendChild(script);
      }
    } else {
      alert("Refresh Page. Because script tags are appended too many times...");
    }
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "e") {
      clearTimeout(intervalId);
      console.log("User terminated script before dates found...");
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "s") {
      lC();
      console.log("User started Script...");
    }
  });
})();
