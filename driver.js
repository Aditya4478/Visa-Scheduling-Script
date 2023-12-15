javascript: (function () { // enclosing whole driver code as function to use it as bookmark
  alert("Script Added");
  var counter = 0,intervalId,checkCalendar,greenDay;
  function lC() {
    if (counter < 500) {
      // Check each time wether dates were available or not after calling the script
      // i.e. automatically terminating the loop if green day is found
      checkCalendar = document.getElementById("ui-datepicker-div");
      greenDay = checkCalendar.querySelectorAll(".greenday");
      if (greenDay.length > 0) {
        console.log("Dates Found, Script terminated...");
        clearTimeout(intervalId);
      } else { // calling script from github hosted site
        // This is unreliable method because it creates
        // script tag each & every time. Try to find any
        // alternative method of calling script.
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src =  "https://aditya4478.github.io/temporary-image-hosting/mumbai.js";
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
  // manually ending the loop by pressing "e"
  document.addEventListener("keydown", function (event) {
    if (event.key === "e") {
      clearTimeout(intervalId);
      console.log("User terminated script before dates found...");
    }
  });
  // manually starting the loop by pressing "e"
  document.addEventListener("keydown", function (event) {
    if (event.key === "s") {
      lC();
      console.log("User started Script...");
    }
  });

})();
