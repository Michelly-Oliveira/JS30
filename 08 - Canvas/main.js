// Get the canvas
let canvas = document.querySelector("#draw");
// Get the context
let canvasContext = canvas.getContext("2d");
// Resize the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Color to start draw
canvasContext.strokeStyle = '#BADA55';
// When a line meets other line
canvasContext.lineJoin = 'round';
canvasContext.lineCap = 'round';
canvasContext.lineWidth = 100;
canvasContext.globalCompositeOperation = 'source-over';

// Check if mouse is down or not
let isDrawing = false;
// Last mouse coordinates
let lastX = 0;
let lastY = 0;

// Tom da cor
let hue = 0; // start at red, every 360 start again
let direction = true;

function draw(e) {
    if(!isDrawing) {
        return; // Stop the function from running when the mouse is not down
    }

    canvasContext.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    canvasContext.beginPath();
    // Start from
    canvasContext.moveTo(lastX, lastY);
    // Go to
    canvasContext.lineTo(e.offsetX, e.offsetY);
    // Draw
    canvasContext.stroke();

    // Update the last mouse coordinates
    [lastX, lastY] = [e.offsetX, e.offsetY];

    // Increment hue to change the color
    hue++;
    if(hue >= 360) {
        hue = 0;
    }

    // Change line width and direction
    if(canvasContext.lineWidth >= 100 || canvasContext.lineWidth <= 1) {
        direction = !direction;
    }
    if(direction) {
        canvasContext.lineWidth++;
    } else {
        canvasContext.lineWidth--;
    }
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;

    // Update the last mouse coordinates to where we current are
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);