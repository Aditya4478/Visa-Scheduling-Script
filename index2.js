var dropdown = document.getElementById("post_select");
var desiredOptionValue = "486bf614-b0db-ec11-a7b4-001dd80234f6"; //mumbai-dropdown-value
var n = 19; // [1-19] Best-case = 3

//accessing the "mumbai" from dropdown menu
for (var i = 0; i < dropdown.options.length; i++) {
    if (dropdown.options[i].value === desiredOptionValue) {
        dropdown.selectedIndex = i;
        dropdown.dispatchEvent(new Event("change"));
        break;
    }
}

function waitForDatepickerClass() {
    return new Promise((resolve, reject) => {
        function checkDatepickerClass() {
        const datepicker = document.getElementById('datepicker');

            if (datepicker && datepicker.classList.contains('hasDatepicker')) {
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
var clickCounter = 0;
function checkAndClickNext() {
    // Check if the maximum number of clicks (n times) has been reached
    if (clickCounter < n) {

        var calendarContainer = document.getElementById("ui-datepicker-div");
        if (calendarContainer){

            var greenDays = calendarContainer.querySelectorAll(".greenday");

            if (greenDays.length > 0) {
                console.log("There are green days in the calendar.");
                let audio = new Audio('https://aditya4478.github.io/Visa-Scheduling-Script/notification.mp3');
                audio.play();
                clickCounter = 100;
                clearInterval(intervalId);

                var greenDayCell = document.querySelector('td.greenday');
                if (greenDayCell) {
                    var greenDayLink = greenDayCell.querySelector('a');
                    if (greenDayLink) {
                        greenDayLink.click();
                    }
                }
                // Waiting to render the "time-slots" after greeday is selected.
                function selectFirstTimeSlot() {
                    var firstRadioButton = document.querySelector('input[name="schedule-entries"]:first-of-type');
                    if (firstRadioButton) {
                        firstRadioButton.click();
                        console.log("First time slot selected");

                        var submitButton = document.getElementById('submitbtn');
                        if (submitButton.attributes[6] === undefined) {
                            // submitButton.click();
                            console.log("Submit button clicked");
                            clearInterval(intervalId1);
                        }
                    }
                }

                var intervalId1 = setInterval(selectFirstTimeSlot, 1000);
            } else {
                //console.log("There are no green days in the calendar.");
                // Get a reference to the "Next" button
                var nextButton = document.querySelector(".ui-datepicker-next");
                if (nextButton) {

                    nextButton.click();
                    clickCounter++;
                    // Check wether its last case or not.
                    if (clickCounter === n) {

                        $('#datepicker').datepicker('hide');
                        if (greenDays.length === 0) {

                            // Select the first option in the dropdown - that is reseting all values
                            dropdown.selectedIndex = 0;
                            dropdown.dispatchEvent(new Event("change"));
                        }
                    }
                } //else { console.log("Next button not found.");  }
            }
        } //else {  console.log("Calendar container not found.");  }
    } else { //console.log("Maximum number of clicks reached.");
        clearInterval(intervalId);
    }
}
$('#datepicker').datepicker('show');

// Call the function for the first time
checkAndClickNext();
var intervalId = setInterval(checkAndClickNext, 1000);
}).catch((error) => {
console.error('Error waiting for datepicker class:', error);
});
