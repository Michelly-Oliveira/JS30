const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");

// how many pixels we can go -> 250 to -250
const walk = 500; // 500px

function shadow(e) {
    // Get the data from the hero element
    /*
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    */
    const {offsetWidth: width, offsetHeight: height} = hero;

    // Get the location of the cursor
    let {offsetX: x, offsetY: y} = e;

    // e.target = what triggered the event
    // this = hero; e.target = hero || text
    if(this !== e.target) {
        // So the values won't go back to zero when we enter the h1
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    
    // left of text, top of text, blur
    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 red,
        ${xWalk * -1}px ${yWalk}px 0 green,
        ${yWalk}px ${xWalk * -1}px 0 blue,
        ${yWalk * -1}px ${xWalk}px 0 yellow
    `;
}

hero.addEventListener("mousemove", shadow);