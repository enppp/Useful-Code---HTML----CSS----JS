JavaScript (JS) Code

1    function delay(ms) {
2      return new Promise(resolve => setTimeout(resolve, ms));
3    };
4    
5    
6    
7    async function functionNameHere() {
8    
9      const variableNameHere = document.getElementById(" ID-HERE ");
10
11      console.log("Creating 5 lines");
12      for (let i = 0; i < 5; i++) {
13        const p = document.createElement("p");
14        p.textContent = `>_`;
15        container1.appendChild(p);
16        await delay(50);
17      };
18    
19        console.log("Created 5 lines");
20        await delay(100);
21        console.log("Showing DIRECTORY BUTTONS");
22        // Use this function if needed. ( Useful for showing buttons n' such )
23        functionName();
24      
25    };
26    

HyperText Markup Language (HTML) Code

1       <div id=" ID-HERE ">
2       <!-- NO TEXT HERE -->
3       </div>

Cascading StyleSheet (CSS) Code

1   p {
2     font-family: "Helvetica", Arial, sans-serif;
3     font-weight: Bold;
4   
5   }
6   
7   
8   




README.md (written like it would in a markdown file(Don't worry this file type is for me)) 

# This file contains 2 functions:
## Contents


### Files:


<ol>
 <li>JavaScript Files - The main Code</li>
 <li> CSS Files - So everything is neat and looks good</li>
</ol>
# ------------------------------------


# How to implement


<p>
This code is very simple and is easy to implement.
I even renamed some things for easier finding.
</p>


# ------------------------------------


## Step 1 - Adding HTML


<p>


To get it to work with the HTML Document, you need to add a **DIV** Element with an ID of your choice.


If you have multiple **DIV** elements, make sure you don't reuse an ID by accident.


Take the ID of this new **DIV** and put it in this .getElementById() where it says "ID-HERE"


</p>


**Line 9 | const variableNameHere = document.getElementById("ID-HERE");**


# ------------------------------------


## Step 2 - Name your variables & functions


<p> The following lines need to be renamed.


Doesn't matter what you name them, just put a name where it say to put it. :3 </p>
<br>
<p>


**Line 7 | functionNameHere**


**Line 9 | variableNameHere**


**Line 12 | functionName** </p>


# ------------------------------------


## Step 3 ( OPTIONAL ) - Change how many lines are created


<p> Change the number "5" in this line of code to how many lines you need. </p>


**Line 12 | for (let i = 0; i < 5; i++) {**


# ------------------------------------


## Step 4 ( OPTIONAL ) - Change the speed the text is created


<p>


This step is optional if you don't mind the original speed set by me :3


To change the speed, change the number in these line:


</p>


<p>
<br>
Its in milliseconds - 1000 Milliseconds = 1 Second




**Line 16 | await delay(50);**




**Line 20 | await delay(100);**


</p>


# ------------------------------------


<p>


# WARNING - DO NOT CHANGE ANYTHING IN THE FIRST FUNCTION - This function controls the delay() and if messed with will result in the code not working!


</p>





** 20        await delay(100);  **

# WARNING - DO NOT CHANGE ANYTHING IN THE FIRST FUNCTION
## This function controls the delay() and if messed with will result in the code not working!
