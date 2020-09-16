import {
    fifaData
} from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 
 */
const wcF2014 = fifaData.filter(function (item) {
    return item.Year === 2014 && item.Stage === "Final"
});
console.log(wcF2014);
/*
(a) Home Team name for 2014 world cup final
*/
console.log(wcF2014[0]["Home Team Name"]);
/*
(b) Away Team name for 2014 world cup final
*/
console.log(wcF2014[0]["Away Team Name"]);
/*
(c) Home Team goals for 2014 world cup final
*/
console.log(wcF2014[0]["Home Team Goals"]);
/*
(d) Away Team goals for 2014 world cup final
*/
console.log(wcF2014[0]["Away Team Goals"]);
/*
(e) Winner of 2014 world cup final */
console.log(wcF2014[0]["Win conditions"]);

// ********* Brits Answer ************
// const finals2014 = fifaData.filter(function (item) {
//     return item.Year === 2014 && item.Stage === 'Final';
// });
// console.log(finals2014);

// //(a) Home Team name for 2014 world cup final
// console.log(finals2014[0]['Home Team Name']);

// //(b) Away Team name for 2014 world cup final
// console.log(finals2014[0]['Away Team Name']);

// //(c) Home Team goals for 2014 world cup final
// console.log(finals2014[0]['Home Team Goals']);

// //(d) Away Team goals for 2014 world cup final
// console.log(finals2014[0]["Away Team Goals"]);

// //(e) Winner of 2014 world cup final */
// console.log(finals2014[0]["Win conditions"]);



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

const getFinals = fifaData.filter(function (item) {
    return item.Stage === "Final";
});

console.log(getFinals);

// ******* Brits Answer ****************
// function getFinals(data){
//     const allFinals = data.filter(function(item){
//         return item.Stage === 'Final';
//     })
//     return allFinals;
// }

// console.log(getFinals(fifaData));




/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cbGetFinals) {
    const years = cbGetFinals.map(function (item) {
        return item.Year;
    });
    return years;
};

console.log(getYears(getFinals));

// ******* Brits Answer ****************
// function getYears(data, getFinalsCB) {
//     return getFinalsCB(data).map(function (item) {
//         return item.Year;
//     })
// };

// console.log(getYears(fifaData, getFinals));





/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(cbGetFinals) {
    const winners = [];
    cbGetFinals.forEach(function (item) {
        if (item['Home Team Goals'] > item['Away Team Goals']) {
            return winners.push(item['Home Team Name']);
        } else if (item['Home Team Goals'] < item['Away Team Goals']) {
            return winners.push(item['Away Team Name']);
        } else {
            return winners.push('Nobody');
        };
    });
    return winners;
};

console.log(getWinners(getFinals));

// ******* Brits Answer ****************
// function getWinners(data, getFinalsCB) {
//     let winners = [];
//     getFinals(data).forEach(function (item) {
//         if (item['Home Team Goals'] > item['Away Team Goals']) {
//             winners.push(item['Home Team Name']);
//         } else if (item['Away Team Goals'] > item['Home Team Goals']) {
//             winners.push(item['Away Team Name']);
//         } else if(item['Home Team Goals'] === item['Away Team Goals']){
//             winners.push(item['Win conditions']);
//         }
//     });
//     return winners;
// };

// console.log(getWinners(fifaData, getFinals));



/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cbGetWinners, cbgetYears) {
    const whoWonWhen = [];
    for (let loop = 0; loop < cbGetWinners.length; loop++) {
        whoWonWhen.push(`In ${cbgetYears[loop]}, ${cbGetWinners[loop]} won the world cup!`);
    };
    return whoWonWhen;
};

console.log(getWinnersByYear(getWinners(getFinals), getYears(getFinals)));

// ******* Brits Answer ****************
// ********* Need to get the fix for this ************
// function getWinnersByYear(getWinnersCB, getYearsCB) {
//     let winners = getWinnersCB(fifaData, getFinals);
//     console.log(winners);
//     let years = getYearsCB(fifaData, getFinals);
//     console.log(years);
//     let yearlyWinners = [];
//     winners.forEach(function(item, index){
//         yearlyWinners.push(`in ${years[index]}, ${item} won the world cup!`)
//     })
//     console.log(winners)
//     return yearlyWinners;
// };
// console.log(getWinnersByYear(getWinners, getYears));




/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */


//******** not working. Avg of Home, Avg of Away */

// function getAverageGoals(data) {
//     const home = data.reduce(function (accumulator, item) {
//         return (accumulator + item['Home Team Goals']);
//     }, 0);
//     const away = data.reduce(function (accumulator, item) {
//         return (accumulator + item['Away Team Goals']);
//     }, 0);
//     console.log(home, away);
//     return [home:, away:] ;
// };

// console.log(getAverageGoals(fifaData));


// **** Answered as avg of home and away totaled together. ****

function getAverageGoals(data) {
    const avg = data.reduce(function (accumulator, item) {
        return Math.round((accumulator + (item['Home Team Goals'] + item['Away Team Goals'])) / 2);
    }, 0);
    return avg;
};

console.log(getAverageGoals(fifaData));

// ******* Brits Answer ****************
// function getAverageGoals(data) {
//     const averageHomeGoals = data.reduce(function (acc, item) {
//         return acc + item['Home Team Goals'];
//     }, 0)
//     const averageAwayGoals = data.reduce(function (acc, item) {
//         return acc + item['Away Team Goals'];
//     }, 0)
//     return `Home Team Average: ${averageHomeGoals / data.length}, Away Team Average ${averageAwayGoals / data.length}`;
// };

// console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins( /* code here */ ) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals( /* code here */ ) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense( /* code here */ ) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */