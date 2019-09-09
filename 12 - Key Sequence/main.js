const pressed = [];
const secretCode = 'sam';

window.addEventListener("keyup", (e) => {
    console.log(e.key);

    pressed.push(e.key);
    console.log(pressed);
    // Start removing from index 0 -> first element; remove 1 element
    // At this moment in the code, the array has length of 4, so -secretCode.length - 1 = -4 = index 0; pressed.length - secretCode.length = 1
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if(pressed.join('').includes(secretCode)) {
        console.log('WINCHESTER!');
        cornify_add();
    }

    console.log(pressed);
});