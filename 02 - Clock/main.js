// Get the hands
let hourHand = document.querySelector(".hour-hand");
let minuteHand = document.querySelector(".min-hand");
let secondHand = document.querySelector(".second-hand");

function setDate() {
    // Create a new date object to get the time from
    let now = new Date();

    // Get seconds
    let seconds = now.getSeconds();
    // seconds/60 = percentage  * 360 = get the equivalent in degrees  + 90 = fix the position of the hand on the screen -> correspond to an actual clock
    let secondsDegrees = ((seconds/60) * 360) + 90;
    // Apply style to the second-hand CSS
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // Get minutes
    let minutes = now.getMinutes();
    // min/60 = percentage  * 360 = get the equivalent in degrees  + 90 = fix the position of the hand on the screen -> correspond to an actual clock
    let minutesDegrees = ((minutes/60) * 360) + 90;
    // Apply style to the second-hand CSS
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    // Get hours
    let hours = now.getHours();
    // hours/60 = percentage  * 360 = get the equivalent in degrees  + 90 = fix the position of the hand on the screen -> correspond to an actual clock
    let hoursDegrees = ((hours/12) * 360) + 90;
    // Apply style to the second-hand CSS
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    console.log(hours+":"+minutes+":"+seconds);
}

// Run every 1s
setInterval(setDate, 1000);