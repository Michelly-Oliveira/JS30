const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

// Updates more frequently if the person is moving more/faster
navigator.geolocation.watchPosition((data) => {
    // Show the velocity the user is moving
    speed.textContent = data.coords.speed;

    // Move the arrow on the compass to show our position relative to the North
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
    console.err(err);
    alert("HEY: YOU GOTTA ALLOW THAT TO HAPPEN!!!")
});