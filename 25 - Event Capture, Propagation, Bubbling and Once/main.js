const divs = document.querySelectorAll('div');
const btn = document.querySelector('button');

function logText(e) {
  console.log(this.classList.value);

  // Stop bubbling up
  // Activates the event only for the first element 'stored'
  // e.stopPropagation();
}

divs.forEach(div =>
  div.addEventListener('click', logText, {
    capture: false,
    once: true
  })
);

btn.addEventListener('click', () => alert('You clicked the button!'), {
  once: true
});

// Capture -> it goes from the root element until the element that activated the event, 'storing' all of these events
// capture: true -> activates the events as it goes down to the element

// Bubbling -> activates the events 'stored' from bottom to top of document, from the one that activated the event to the root
// if an eventListener is activated on an nested element, the event will also trigger for the wrappers, it ripples up
// EX: click on div three will also trigger the event on divs two and one

// once -> triggers the event only once and then unbinds it
// Same as div.removeEventListener("click", logText)
