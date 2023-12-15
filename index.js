// Code 1: Selecting a specific option in the dropdown
var dropdown = document.getElementById("post_select");
var desiredOptionValue = "486bf614-b0db-ec11-a7b4-001dd80234f6"; //mumbai-dropdown-value

//accessing the "mumbai" from dropdown menu
for (var i = 0; i < dropdown.options.length; i++) {
    if (dropdown.options[i].value === desiredOptionValue) {
        dropdown.selectedIndex = i;
        dropdown.dispatchEvent(new Event("change"));
        break;
    }
}

// Code 2: Executing after a 3-second delay (waiting for calendar to be fetched.)
setTimeout(function () {
    // Counter to track the number of times the "Next" button has been clicked
    var clickCounter = 0;
    // Function to check for green days and click the "Next" button up to two times
    function checkAndClickNext() {
        // Check if the maximum number of clicks (2 times) has been reached
        if (clickCounter < 2) {
            // Get a reference to the calendar container
            var calendarContainer = document.getElementById("ui-datepicker-div");

            // Check if the calendar container exists
            if (calendarContainer) {
                // Find all elements with the class "greenday" within the calendar container - there may be more than 1 greenday available in same month
                var greenDays = calendarContainer.querySelectorAll(".greenday");

                // Check wether we got any "greenday" or not
                if (greenDays.length > 0) {
                  
                    console.log("There are green days in the calendar.");
                    let audio = new Audio('https://aditya4478.github.io/temporary-image-hosting/notification.mp3'); 
                    audio.play(); // notify user
                    clickCounter = 100; // preventing the calendarContainer to get closed - check line 77 "if (clickCounter === 2)..." for more details
                    clearInterval(intervalId); // Ending Loop which is started to run checkAndClickNext() for infinite times on line 110

                    // Line 28 has only searched the overview of calendar. If greenday exist in calendar, then click the 1st available green day.
                    var greenDayCell = document.querySelector('td.greenday');
                    if (greenDayCell) {
                        // Get the <a> tag inside the <td> with class "greenday"
                        var greenDayLink = greenDayCell.querySelector('a');
                        if (greenDayLink) {
                            greenDayLink.click();
                        }
                    }
                    // Waiting few seconds to render the "time-slots" after greeday is selected.
                    setTimeout(function() {
                        //console.log("After 1 seconds, following code will run");
                            var firstRadioButton = document.querySelector('input[name="schedule-entries"]:first-of-type');
                            if (firstRadioButton) {
                                firstRadioButton.click();
                                console.log("First time slot selected");
                            // Now searching for Submit button. Not searching in advance because I was facing dificulty 
                            // to handle the submit button state. i.e. "disabled or not". So I decided to search for button 
                            // only if the TIME_SLOT was selected. As soon as time slot is selected, the Site will enable the Submit button :)
                            var submitButton = document.getElementById('submitbtn');
                            if (submitButton.attributes.disabled != undefined) {
                                    submitButton.click();
                                    console.log("Submit button clicked");
                                }
                            }
                       }, 1000);
                } else {
                    //console.log("There are no green days in the calendar.");
                    // Get a reference to the "Next" button
                    var nextButton = document.querySelector(".ui-datepicker-next");
                    if (nextButton) {
                        nextButton.click();
                        //console.log("Clicked on the Next button to move to the next month.");

                        // Increment the click counter 
                        clickCounter++;

                        // Check if it's the last click, then hide the datepicker. You can move the following 
                        // "if(clickCounter === 2)" block to line 98 also. it should work same.
                        if (clickCounter === 2) {
                            $('#datepicker').datepicker('hide'); // Jquery Code to hide. You can write as it is whenever you want to hide 
                                                                 //calendar. Jquerry code inside JS file works without any serious problems.

                            // Check if no green days are found after the last click.
                            if (greenDays.length === 0) {
                                // Select the first option in the dropdown - that is reseting all values
                                dropdown.selectedIndex = 0;
                                dropdown.dispatchEvent(new Event("change")); // I forgot why this is here :( debug it yourself...
                                //console.log("Selected the first option in the dropdown.");
                            }
                        }
                    } else {
                        console.log("Next button not found.");
                      }
                }
            } else {
                console.log("Calendar container not found.");
            }
        } else {
            //console.log("Maximum number of clicks reached.");
            clearInterval(intervalId); // Stop the interval when maximum clicks are reached
        }
    }

    // Show the datepicker. Code2 actually starts from here. The aboove part was function declaration.
    $('#datepicker').datepicker('show');

    // Call the function for the first time
    checkAndClickNext();

    // Set an interval to call the function every 1 second.
    var intervalId = setInterval(checkAndClickNext, 1000);
}, 3000); // 3 seconds delay

// So, checkAndClickNext() will execute 1(line 107) + 2 (line 110) times taking 3 seconds in total & the 
//calendar fetching wait period is 3 seconds thus total time is 6 seconds. Remember it & then see driver code.
