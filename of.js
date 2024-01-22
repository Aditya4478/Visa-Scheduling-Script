let city = prompt("Enter city name { Chennai / Hyderabad / Kolkata / Mumbai / Delhi } :-").toLowerCase();
let city_dropdown = document.getElementById("post_select");
let desiredCityDropdownValue;
let eventListnerFlag = 1, datesFoundFlag = 0;
var buttonContainer = document.getElementById("gm_select");

var newButton = document.createElement("button");
newButton.textContent = "Start " + city +" VAC loop of 2 months  ";
newButton.addEventListener("click", function() {
    if(city == 'chennai'){
        checkCity(1);
    }else if(city == 'hyderabad'){
        checkCity(2);
    }else if(city == 'kolkata'){
        checkCity(3);
    }else if(city == 'mumbai'){
        checkCity(4);
    }else if(city == 'delhi'){
        checkCity(5);
    }else{
        alert("City not found, Referesh the Page !")
    }
});
buttonContainer.appendChild(newButton);

var newButton1 = document.createElement("div");
newButton1.textContent = "Press 'e' to end loop";
buttonContainer.appendChild(newButton1);

function checkCity(m){
    let cityIndex = m;

    switch (cityIndex) {
        case 1: desiredCityDropdownValue = "3f6bf614-b0db-ec11-a7b4-001dd80234f6"; break;//chennai
        case 2: desiredCityDropdownValue = "436bf614-b0db-ec11-a7b4-001dd80234f6"; break;//hyderabad
        case 3: desiredCityDropdownValue = "466bf614-b0db-ec11-a7b4-001dd80234f6"; break;//kolkata
        case 4: desiredCityDropdownValue = "486bf614-b0db-ec11-a7b4-001dd80234f6"; break;//mumbai
        case 5: desiredCityDropdownValue = "4a6bf614-b0db-ec11-a7b4-001dd80234f6"; break;//delhi
        default: console.log(`City not recognized.`);
    }

    //accessing the city from city_dropdown menu
    for (let i = 0; i < city_dropdown.options.length; i++) {
        if (city_dropdown.options[i].value === desiredCityDropdownValue) {
            city_dropdown.selectedIndex = i;
            city_dropdown.dispatchEvent(new Event("change"));
            break;
        }
    }

    function waitForDatepickerClass() {
        return new Promise((resolve, reject) => {
            function checkDatepickerClass() {
            let datepicker = document.getElementById('datepicker');
                if(eventListnerFlag == 1){
                    eventListnerFlag = 0;
                    //console.log("Event Key Listner added");
                    document.addEventListener("keydown", function (event) {
                        if (event.key === "e" || event.key === "E") {
                            waitForDatepickerClass = null
                            checkCity = null;
                            alert("User terminated script before dates found...");
                        }
                    });
                }
                //let nullDates = document.getElementById('datepicker').value;
                if(document.getElementById('datepicker').value == ''){
                    checkCity(m);
                }else if (datepicker && datepicker.classList.contains('hasDatepicker')) {
                    // Datepicker has the specified class
                    //console.log('Datepicker has the "hasDatepicker" class');
                    resolve();
                } else {
                    // Element is not ready yet, wait and check again
                    setTimeout(checkDatepickerClass, 1000); // Adjust the timeout as needed
                }
            }
            // Start checking immediately
            checkDatepickerClass();
        });
    }


    waitForDatepickerClass().then(() => {
        // Perform further actions or logic when the datepicker has the specified class
        let nextMonthClickCounter = 0;
        function checkMonthAndClickNext() {
            // Check if the maximum number of clicks (n times) has been reached
            if (nextMonthClickCounter < 2) {

                let calendarContainer = document.getElementById("ui-datepicker-div");
                if (calendarContainer){
                    let greenDays = calendarContainer.querySelectorAll(".greenday");

                    if (greenDays.length > 0) {
                        let audio = new Audio('https://aditya4478.github.io/Visa-Scheduling-Script/notification.mp3');
                        audio.play();
                        nextMonthClickCounter = 100; // it helps to exit loop immediately after finding dates.
                        clearInterval(intervalId);
                        //selecting available date
                        let dateAvailable = document.querySelector('td.greenday');
                        if (dateAvailable) {
                            let dateAvailableLink = dateAvailable.querySelector('a');
                            if (dateAvailableLink) {
                                dateAvailableLink.click();
                            }
                        }
                        // Selecting first "time-slots" after date is selected.
                        function selectFirstTimeSlot() {
                            let firstRadioButton = document.querySelector('input[name="schedule-entries"]:first-of-type');
                            if (firstRadioButton) {
                                firstRadioButton.click();
                                console.log("First time slot selected");

                                // Clicking submit button
                                let submitButton = document.getElementById('submitbtn');
                                if (submitButton.attributes[6] === undefined) {
                                    submitButton.click();
                                    console.log("Submit button clicked");
                                    if(false){
                                        clearInterval(intervalId1);    
                                    }
                                }
                            }
                        }
                        let intervalId1 = setInterval(selectFirstTimeSlot, 500);
                    } else {
                        //There are no green days in the calendar
                        //Get a reference to the "Next" button
                        //console.log("Green day not found");
                        var nextButton = document.querySelector(".ui-datepicker-next");
                        if (nextButton) {

                            nextButton.click();
                            nextMonthClickCounter= nextMonthClickCounter + 1;

                            // Check wether its last case or not.
                            if (nextMonthClickCounter == 2) {

                                $('#datepicker').datepicker('hide');

                                if (greenDays.length === 0) {
                                    // Select the first option in the city_dropdown - that is reseting all values

                                    // city_dropdown.selectedIndex = 0;
                                    // city_dropdown.dispatchEvent(new Event("change"));

                                    datepicker = undefined;
                                    calendarContainer = undefined;
                                    nextButton = undefined;
                                }
                                //console.log(cityIndex);

                                   checkCity(m);

                            }
                        } //else { console.log("Next button not found.");  }
                    }
                } //else {  console.log("Calendar container not found.");  }
            } else { //console.log("Maximum number of clicks reached.");
                clearInterval(intervalId);
            }
        }
        $('#datepicker').datepicker('show');

        if(eventListnerFlag == 1){
            eventListnerFlag = 0;
            //console.log("Event Key Listner added");
            document.addEventListener("keydown", function (event) {
                if (event.key === "e" || event.key === "E") {
                    clearInterval(intervalId);
                    checkCity = null;
                    alert("User terminated script before dates found...");
                }
            });
        }
        // Call the function for the first time
        let intervalId = setInterval(checkMonthAndClickNext, 500);
        }).catch((error) => {
        console.error('Error waiting for datepicker class:', error);
        });
}
