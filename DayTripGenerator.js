'use strict'
//code below

// Features: 
// (5 points): As a developer, I want to make at least three commits.
// (5 points): As a developer, I want all of my functions to have a Single Responsibility. 
//             Remember, each function should do just one thing!

// (5 points): As a user, I want a destination to be randomly selected for my day trip.
// Create a function that randomly selects a destination in the Fort Worth area
// i'll need to input an array of Fort Worth area destinations
// after a destination is selected at random from the array, I need to return and console.log it
// if the user doesn't like the destination then a new randomly selected destination needs to be selected
console.log('Welcome & thank you for choosing the Fort Worth, Texas - Day Trip Planner!')

let destinations = ['Crowley','Burleson','Mansfield','Saginaw','Keller','Arlington','Fort Worth'];
function randomDestGener (array) {
    let randI = Math.floor(Math.random()*array.length);
    return randI;
}
let randomNumber = randomDestGener(destinations);
let randomDestination = destinations[randomNumber]; 
console.log(randomDestination);

// (5 points): As a user, I want a restaurant to be randomly selected for my day trip.
let restaurants = ['Restaurant A','Restaurant B','Restaurant C','Restaurant D','Restaurant E','Restaurant F','Restaurant G'];
function randomRestGener (array) {
    let randI = Math.floor(Math.random()*array.length);
    return randI;
}
let random2Number = randomRestGener(restaurants);
let randomRestaurant = restaurants[random2Number];
console.log(randomRestaurant);

// (5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.
let modesOfTransport = ['Car','Individual Bicycle','Tandem Bicycle','Horse and Carriage','Walk','Jog','Roller Blade','Bus'];
function randomTransportGener (array) {
    let randI = Math.floor(Math.random()*array.length-1);
    return randI;
}
let random3Number = randomDestGener(modesOfTransport);
let randomTransportation = modesOfTransport[randomNumber];
console.log(randomTransportation);

// (5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.
// let destinations = ['Crowley','Burleson','Mansfield','Saginaw','Keller','Arlington','Fort Worth'];
// function randomDestGener (array) {
//     let randI = Math.floor(Math.random()*array.length-1);
//     return randI;
// }
// let randomNumber = randomDestGener(destinations);
// let randomDestination = destinations[randomNumber];
// console.log(randomDestination);

// (15 points): As a user, I want to be able to randomly re-select a destination, restaurant, 
//              mode of transportation, and/or form of entertainment if I don’t like one or more of those things.


// (10 points): As a user, I want to be able to confirm that my day trip is “complete” once I 
//              like all of the random selections.


// (10 points): As a user, I want to display my completed trip in the console.