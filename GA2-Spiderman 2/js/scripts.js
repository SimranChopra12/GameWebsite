function shiDisplayAnswer(messageType) { 

    let answer = document.getElementById("users-answer").value; 

 
 

    let message = ""; 

     

    // This is a if statement to check the input of the answer, and it will return the corresponding result. 

    if(answer=='A') { 

        message = answer + " is your answer. Sorry, your answer is wrong!" 

        + "\n" + "This event happened in 2005!"; 

    } 

 
 

    else if(answer=='B') { 

        message = answer + " is your answer. Congratulation, your answer is correct!!!"; 

    } 

 
 

    else if(answer=='C') { 

        message = answer + " is your answer. Sorry, your answer is wrong!" 

        + "\n" + "This event happened in 2010!"; 

    } 

 
 

    else if(answer=='D') { 

        message = answer + " is your answer. Sorry, your answer is wrong!" 

        + "\n" + "This event happened in 1958!" 

    } 

 
 

    let contentContainer = document.getElementById("shi-submit-Answer"); 

 
 

    // use window alert to output the result 

    window.alert(message); 

} 

 

 

//MINI-GAME-ILIA section 

 

//This is the script for the wrong asnwers 

function ilia_Wrong() { 

    alert("Wrong!"); 

} 

  

//This is the script for the right answer 

function ilia_Right() { 

    alert("You are totally RIGHT!"); 

} 

  

//This is the script for the hint 

function ilia_left() { 

    alert("Have I left the left side of the left building?!") 

} 

 



 

// Function for correct answer 

function displayCorrect() { 

    alert("Congratulations !! This image is the correct picture of Miles Morales as a teenager in the movie Spiderman Into The Spiderverse. To continue to next game please click Next at the bottom."); 

} 

// Function for hint 

function hint() { 

    alert("HINT: Click the image without suit"); 

} 

// Function for incorrect answers 

function displayIncorrect() { 

    alert("!! Try Again or use hint !!"); 

} 

// Function for selecting the text in h1 heading 

function displayText() { 

    alert("You are smart if you clicked here but incorrect. Try Again"); 

} 

 
 

//Concept learned from 

// URL: https://stackoverflow.com/questions/2906582/how-to-create-an-html-button-that-acts-like-a-link 

// Date accessed: 30/10/20 

 
 

// Function to go to the next game 

function nextgame() { 

    window.location.href='#mini-game-ilia'; 

} 

// Function to go to the previous game 

function previousgame() { 

    window.location.href='#mini-game-sahil'; 

} 

 


// Javascript by Sahil

function darkModeHint(){ 

    var x = document.body; 

    x.classList.toggle("dark-mode"); 

} 

 
 

/* 

    Function to change color 

*/ 

 
 

function wrongAnswer(){ 

    alert("Oops! This is the wrong answer. \nPlease Retry"); 

} 

 
 

/* 

    Function to give alert when wrong answer is clicked 

*/ 

 
 

function correctAnswer(){ 

    alert("Yay!!! Congratulations, your answer is correct.\nMove on to the next game if you wish!"); 

} 

 

 

 
 

/* 

    Function to give alert when correct answer is clicked 

*/ 

 
 

//Javascript by simran 

 
 

function correct(){ 

    alert("CORRECT answer ! GOOD JOB :) Try other mind boggling questions on this webpage !!"); 

} 

//This is function for pop-up when the user clicks on correct answer 

function wrong(){ 

    alert("SORRY ! Wrong answer :(( TRY AGAIN !!"); 

} 

//This is function for pop-up when the user clicks on wrong answer 

//Concept of alert learned from concept videos of week7 