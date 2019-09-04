// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// filter() -> Returns the elements of an array that meet the condition specified in a callback function. Apply the function for each element of the array
let fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
// map() -> takes an array, do something with it, then returns a new array with the same length
let fullNames = inventors.map(inventor => (inventor.first + " " + inventor.last));
console.table(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// sort() -> compare two items os an array, returns 1 if the condition is true or -1 if the condition is false
let birthdate = inventors.sort(
    (firstPerson, secondPerson) => (firstPerson.year > secondPerson.year ? 1 : -1)
);
console.table(birthdate);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
// reduce() -> Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function
let totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

// 5. Sort the inventors by years lived
let oldest = inventors.sort((firstPerson, secondPerson) => {
    let lastGuy = firstPerson.passed - firstPerson.year;
    let nextGuy = secondPerson.passed - secondPerson.year;

    // Return oldest to youngest
    return (lastGuy < nextGuy ? 1 : -1);
});
console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
/*
// Select the elements
let category = document.querySelector(".mw-category");
// Transform the links into an array
let links = Array.from(category.querySelectorAll("a"));

// Get the boulevard names from the array
let de = links.map(link => link.textContent);
// Select only the streets with 'de' on the name
de.filter(streetName => streetName.includes('de'));
*/

// 7. sort Exercise
// Sort the people alphabetically by last name
let orderedNames = people.sort((firstPerson, secondPerson) => {
    //Separate the first and last name of each person on different variables
    let [aLast, aFirst] = firstPerson.split(", ");
    let [bLast, bFirst] = secondPerson.split(", ");

    return (aLast > bLast ? 1 : -1); 
});
console.table(orderedNames);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

let transportation = data.reduce((obj, item) => {
    if(!obj[item]) { // If that item isn't in the obj, initialize the counter
        obj[item] = 0;
    }

    // Increment the counter for each item
    obj[item]++;
    return obj;
}, {});//initial valu is a blank obj
console.table(transportation);

/* Array Cardio 2 */

const morePeople = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Returns true if at least one element of the array matches the condition
let isAdult = morePeople.some(person => {
    let currentYear = (new Date()).getFullYear();

    return (currentYear - person.year >= 19);
});
console.log({isAdult});

// Array.prototype.every() // is everyone 19 or older?
// Returns true if all the elements of the array match the condition, false if one doesn't
let areAdults = morePeople.every(person => {
    let currentYear = (new Date()).getFullYear();

    return (currentYear - person.year >= 19);
});
console.log({areAdults});

// Array.prototype.find()
// Find is like filter, but instead returns just the first element that matches the condition
// find the comment with the ID of 823423
let findID = comments.find(comment => comment.id === 823423);
console.log(findID);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
let index = comments.findIndex(comment => comment.id === 823423);
// Delet the comments from the array
comments.splice(index, 1);
// Create a new array without that element
/*
let newComments = [...comments.slice(0, index), ...comments.slice(index+1)];
*/
console.log(index, comments);