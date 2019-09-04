// Get the list of states and cities
const getPlaces = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// Empty array for the cities
let cities = [];

// Get the elements
let searchInput = document.querySelector('.search');
let suggestions = document.querySelector('.suggestions');
// Add the events
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

// Fetch and blob return promises, use .then() to wrok with promises
fetch(getPlaces)
    .then(blob => blob.json()) //.json will return a JSON array
    .then(data => cities = data);

function findMatches(wordToMatch, cities) {
    // Get the cities/states that match the search
    return cities.filter(place => {
        // Create a regex
        let regex = new RegExp(wordToMatch, 'gi');
        // Add to the array if the serach matched
        return place.city.match(regex) || place.state.match(regex);
    });
}

function displayMatches() {
    // this.value = whatever was typed in the serach form
    let matchArray = findMatches(this.value, cities);

    // get the name and population from the objects
    let html = matchArray.map(place => {
        // Create a regex to replace the wordToMatch with a sapn with a class of highlight
        let regex = new RegExp(this.value, 'gi');
        let cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        let stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `;
    }).join(''); // Turn the array into a string separated with a comma
    // Add the matches to the html
    suggestions.innerHTML = html;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
