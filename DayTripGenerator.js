'use strict'
//code below

console.log('Welcome & thank you for choosing the Fort Worth, Texas - Day Trip Planner!')

function getRandNumber(min, max) {
    let randI = Math.floor(Math.random() * (max - min) ) + min;
    return randI;
}

let destinations = ['Omni Fort Worth Hotel','Kimton Harper Hotel','The Ashton Hotel','Hilton Fort Worth','AC Hotel by Marriott','The Sinclair, Autograph Collection','The Worthington Renaissance Hotel'];
let destNumber = getRandNumber(0, destinations.length);
let randomDestination = destinations[destNumber];
console.log(randomDestination);

let restaurants = ["Bonnell's Fine Texas Cuisine","Paris 7th","Ellerbe Fine Foods","Eddie V's","The Capital Grille","Silver Fox","Texas de Brazil"];
let restNumber = getRandNumber(0, restaurants.length);
let randomRestaurant = restaurants[restNumber];
console.log(randomRestaurant);

let modesOfTransport = ['Car','Bicycle','Horse and Carriage','Walk','Electric Scooter','Roller Blade/Skate','Taxi/Rideshare'];
let transportNumber = getRandNumber(0, modesOfTransport.length);
let randomTransportation = modesOfTransport[transportNumber];
console.log(randomTransportation);

let entertainment = ['Movie theater','Axe throwing','Escape room','Zoo','Museum','Main Event Entertainment','Fort Worth stockyards'];
let entertainNumber = getRandNumber(0, entertainment.length);
let randomEntertainment = entertainment[entertainNumber];
console.log(randomEntertainment);

// Ask user if satisfied with destination, restaurant, transportation, and entertainment?
prompt ("Are you satisfied with the location, restaurant, mode of transportation, and entertainment? [Please type 'yes' or 'no'.]");
// If user says 'no', go through remaining array options at random
// How do I go through an array at random but remove the previously selected options from each future iteration?
// if (userinput !== 'yes') {
//     for (let index = 0; index < array.length; index++) {
//     }
// Or maybe I need to use a while loop?
//     while (condition) {
//     }
// }
// Ask user again if satisfied with destination, restaurant, transportation, and entertainment?
// How do I include a prompt after each new iteration to the user?
// If user says 'no', repeat the process until all array options presented
// After presenting final option say to user "Sorry, I don't have any other ideas."


// (15 points): As a user, I want to be able to randomly re-select a destination, restaurant, 
//              mode of transportation, and/or form of entertainment if I don’t like one or more of those things.
// (10 points): As a user, I want to be able to confirm that my day trip is “complete” once I 
//              like all of the random selections.
// (10 points): As a user, I want to display my completed trip in the console. 