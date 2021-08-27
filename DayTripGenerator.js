'use strict'
//code below

// Features: 
// (5 points): As a developer, I want to make at least three commits.


// (5 points): As a user, I want a destination to be randomly selected for my day trip.
//show options (make a function to show options)
//inside a loop (while loop)
//ask for change if any (until satisfied) - prompt
//make change - call random generation function (if/else or switch/case statement)
//re-show options (re-call the function)
//if satisfied show final trip details (show function)

let destinations = ['Crowley','Burleson','Mansfield','Saginaw','Keller','Arlington','Fort Worth'];

function randomDestGener (array) {
    Math.floor(Math.random()*array.length);
    console.log(Math.floor())
}

// (5 points): As a user, I want a restaurant to be randomly selected for my day trip.


// (5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.


// (5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.


// (15 points): As a user, I want to be able to randomly re-select a destination, restaurant, 
//              mode of transportation, and/or form of entertainment if I don’t like one or more of those things.


// (10 points): As a user, I want to be able to confirm that my day trip is “complete” once I 
//              like all of the random selections.


// (10 points): As a user, I want to display my completed trip in the console.


// (5 points): As a developer, I want all of my functions to have a Single Responsibility. 
//             Remember, each function should do just one thing!
