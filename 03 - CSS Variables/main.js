// Get the inputs
let inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    // dataset -> object that contains all the attributes of an element
    let suffix = this.dataset.sizing || ''; // ||-> for the elements without a suffix
    
    // Select the entire document to get the variables as propeties
    //Set the this.name = this.value + suffix
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Loop through the node list of inputs
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));