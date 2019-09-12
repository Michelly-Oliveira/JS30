const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// Try to get the info from localStorage, if doesn't exist, create an empty array
const items = JSON.parse(localStorage.getItem("items")) || [];

// When the form is complete and the user presses the button
function addItem(e) {
    // Stop the page from reloading every time we submit
    e.preventDefault();

    // Grab the input box
    // this = form
    const text = (this.querySelector(`[name=item]`)).value;

    // Create the item object
    const item = {
        text: text, 
        done: false
    };

    // Add the item to the array 
    items.push(item);

    // Call the populateList fnc to create the html
    populateList(items, itemsList);

    // Save data to localStorage
    localStorage.setItem("items", JSON.stringify(items));

    // Clear the input box
    this.reset();
}

// Create the HTML when an item is added
// start with an empty array in case you forget to pass an argument, so it won't break the program, only loop over it
function populateList(plates = [], platesList) {
    // Add a string to the content of the platesList html
    platesList.innerHTML = plates.map((plate,i) => {
        return `
            <li> 
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                <label for="item${i}">${plate.text}</label>
            </li>
        `; 
        // make the label correspond to the checkbox => id="item${i}/"for="item${i}"
    }).join('');
}

function toggleDone(e) {
    // Get the element we clicked on
    const element = e.target;

    if(!element.matches('input')) {
        // Skip this unless it's an input we clicked on
        return;
    }

    // Get the element's index
    const index = element.dataset.index;

    // Get the done property of the element and set it to it's opposite
    items[index].done = !items[index].done;

    // Save data to localStorage
    localStorage.setItem("items", JSON.stringify(items));

    // Update the html
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
// Event delegation => add the event to the ul, and if the event happened on one of the input, pass the event to it, so the input element handles the event, not the ul
itemsList.addEventListener('click', toggleDone);

// When the page finishes loading, get the data stored on localStorage and display it
populateList(items, itemsList);