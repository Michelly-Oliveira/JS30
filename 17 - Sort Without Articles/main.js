const bandList = document.querySelector("#bands");

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const bandsInOrder = bands.sort((band1, band2) => {
    // Get the articles on the beginning of the word
    let regex = /^the\s|^a\s|^an\s/i;
    // Remove the article from the word
    let tempBand1 = band1.replace(regex, "");
    let tempBand2 = band2.replace(regex, "");

    // Compare the words without the article, though the article will appear on the html
    return (tempBand1 > tempBand2 ? 1 : -1);
});

function displayBands(list) {
    // For each item on the array, create an HTML li element and add it to the ul
    list.forEach(band => {
        return bandList.innerHTML += `
            <li>${band}</li>
        `;
    });
}

displayBands(bandsInOrder);