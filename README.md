<h1> <u>Visa-Scheduling-Script </u></h1>
Creating a fresh script for <a href="https://www.usvisascheduling.com/en-US/" target="_blank">usvisascheduling</a> portal !!!<br><br>
Get Portal User accounts credentials <a href="https://aditya4478.github.io/Visa-Scheduling-Script/" target="_blank">here.</a>

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
