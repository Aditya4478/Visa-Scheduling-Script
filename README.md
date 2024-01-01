<h1> <u>Visa-Scheduling-Script </u></h1>
Creating a fresh script for <a target="_blank" href="https://www.usvisascheduling.com/en-US/">usvisascheduling</a> portal !!!<br><br>
Get Portal User accounts credentials <a href="https://aditya4478.github.io/Visa-Scheduling-Script/" target="_blank">here.</a>

# Project Status as of 31/12/2023:
All tasks are completed !!

# Goals :
1) To remove static time functions & add synchronous logic for raw/index.js code (may be using promise..)
2) To remove the driver code weak point of adding multiple script tags. It should only add once & then run the content of fetched script again & again. 
3) After succesfully writng above 2 codes, write a new code for altering dropdown values & checking whether the calendar is fetched or not
<br>(I have not addressed you about this, since it is very simple task & can be done later also.)

# How to get started ?
<h3>Automated way</h3>
<ol>
<li> Install extension from <a href="https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag" target="_blank">here.</a> </li>
<li> After installing, Click on extension & add script by clicking '+' sign. In "@match" add the following value without quotes
   <br> "https://www.usvisascheduling.com/en-US/ofc-schedule/". Add the driver code from 10th line. (i.e. after "// ==/UserScript==")<br> Click save & close.</li>
<li> Now, visit "https://www.usvisascheduling.com/en-US" & sign-in. When you click to reschedule/schedule appointment, the script will be added automaticaly.</li>
<li> Press "s" to start loop & "e" to end loop. (If you have clicked on any other tab, it will not work. Click anywhere in website before pressing keywords in keyboard)</li>
</ol>
<h3>Manual way of calling script</h3>
<ol>
<li> Open Bookmarks Manager & add New Bookmark. Give the name you want & paste the driver code in URL section.</li>
<li> Pin that Bookmark to the Front so that you can locate easily. </li>
<li> Now whenever you reach to "https://www.usvisascheduling.com/en-US/ofc-schedule/" click on the bookmark to add script.<br>If you referesh page, then the script will be detached. Press on bookmark every time whenever you visit the page.</li>
<li> Press "s" to start loop & "e" to end loop. (If you have clicked on any other tab, it will not work. Click anywhere in website before pressing keywords in keyboard to control the loop)</li>
</ol>

# Common Intstructions
1) Try to code together.
2) Sit for coding when you have at least 1hr time.
3) You can login/refresh site 10-15 times a day, but not consecutively. Maintain some gap before refreshing site for saftey reason. Try to debug code in console & run the whole block only when you are sure that it will not go in infinite loop.
4) If exceeded the number of logins/refresh the portlal will be blocked for particular userid & try to use another available userid after clearing cache of site.
5) While debuging, if code goes to infinite loop then it will result in site crash. use eventKeyListeners to break loop / add console.log to know wether you stucked in loop or not. Refresh the page if any error occurs.
6) Prevent clicking the "Submit button" while debuging code.

# Paycheck

1) Rs. 2000 on completion of Project to each of the three developer who are assigned the task.
2) 50% of profit distributed equally among three developers when the script gets its first sale.

# Use Cases (Vanshika - 3,4 | Ravi - 1,4 | Yashi - 2,4)
1) Client Loads ofc-Schedule/ & press "a" in Keyboard. Client will be asked to enter number 'N' & text 'C'. Now, the loop will iterate on C for checking N months.<br>
<b>Eg:</b> Client press 'a' & then popup occurs. Client enters '3{space}mumbai'. The loop will start for iterating mumbai in OFC. It will check dates for next 3 months. <br>
<b>Detailed - Flow :</b> Select value from city dropdown >> check wether the calendar is available or not >> If its available, start calnedar loop & check for dates.(i.e. check synchronously) >> Sometimes, few city will have no calendar. In such situations, the calendar loop should not start. >> Once the Calendar is checked / we came to know that the calendar doesn't exist, then reset City dropdown. >> Now again, the 2nd iteration will start and city will be selected... (Now onwards, no need to ask the value of N & C. Ask only value once).<hr>Solution : See 'of.js' (OFC-Fixed.js)<hr>
2) Similar to 1 but design it for consular-schedule/. Don't reset city if you don't find calendar. Directly move to next city.<hr>Solution : See 'cf.js' (Consular-Fixed.js)<hr>
3) Client Loads ofc-Schedule/ & press "a" in keyboard. Client will be asked to enter number 'N'. Now, the loop will iterate on all city for N times.<br>
<b>Eg:</b> Client press 'a' & then popup occurs. Client enters '3'. The 1st City is selected from dropdown & then 3 Months Dates are checked. If not found, reset the city to Null. Now select the 2nd City...<br>
<b>Detailed - Flow :</b> Select 1st city from Dropdown >> Check for Calendar availability >> As calendar loads, check for N months dates. >> If dates not found, then reset the calendar to Null / (0th value). Now select 2nd city from Dropdown....<hr>Solution : See 'or.js' (OFC-Random.js)<hr>
4) Client Loads consular-Schedule/ & press "a" in keyboard. Client will be asked to enter number 'N'. Now, the loop will iterate on all city for N times.<br>
<b>Eg:</b> Client press 'a' & then popup occurs. Client enters '3'. The 1st City is selected from dropdown & then 3 Months Dates are checked. If not found, reset the city to Null. Now select the 2nd City...<br>
<b>Detailed - Flow :</b> Select 1st city from Dropdown >> Check for Calendar availability >> As calendar loads, check for N months dates. >> If dates not found, then directly move to 2nd City & check for calendar availability....<br><hr>Solution : See 'cr.js' (Consular-Random.js)<hr>

<b>Note :</b> When Dates are available, wait for time slots. As soon as time slots appear, select 1st & wait for submit button to be enabled. Click submit button & play notification sound. (Never click submit button. Comment code for it. Just find button & its different state like Enabled/Disabled.)<br>
<b>Challenege :</b> To find the Calendar is Loading or it is Null. And everything should be synchronously performed.
