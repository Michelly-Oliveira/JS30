// Grab all the checkboxes
let checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

// Keep track of the last checkbox that was checked
let lastChecked;

function handleCheck(e) {
    let inBetween = false;
    
    // Check if they had the shift key down
    // And check that they are checking it
    if(e.shiftKey && this.checked) {
        // Loop over every single checkbox
        checkboxes.forEach(checkbox => {
            // Bottom-Top || Top-Bottom
            // checkbox === this -> most recent checked box
            // checkbox === lastChecked -> previous selected checkbox
            if(checkbox === this || checkbox === lastChecked) {
                // Invert the value - go both ways > true-false and false-true
                inBetween = !inBetween;
            }
            console.log(inBetween);
            if(inBetween) {
                // If the box is in between the first and last checked checkbox, check it too
                checkbox.checked = true;
            }
        });
    }

    // Update the last checked checkbox
    lastChecked = this;
}