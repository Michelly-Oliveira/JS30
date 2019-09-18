// Grab all the links
const triggers = document.querySelectorAll('a');
// Create the highlight element -> it moves from link to link when we hover
const highlight = document.createElement('span');
// Add class highlight
highlight.classList.add("highlight");
// Add span to body
document.body.appendChild(highlight);

function highlightLink(e) {
    // Get the data from the link
    const linkCoords = this.getBoundingClientRect();

    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        // Add the amount of scroll, so it doesn't look weird when page scrolls
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    };

    // Add the data to the highlight element
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(link => link.addEventListener('mouseenter', highlightLink));