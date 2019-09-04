const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("Hello");

// Interpolated
console.log("Hello. I am a %s string!", "shinobi");

// Styled
console.log("%c I am some great text", "font-size: 30px; color: pink; text-shadow: 10px 10px 0 purple;");

// warning!
console.warn("Oh Nooo");

// Error :|
console.error("OMG :|");

// Info
console.info("Crocodiles eat 3-4 people per year");

// Testing
//.assert = only show if its false
console.assert(1 === 1, "Right");
console.assert(1 === 2, "Wrong");
let p = document.querySelector("p");
console.assert(p.classList.contains('ouch'),"That class doesn't exist on this element");

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.year} years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count("Tony");
console.count("Steve");
console.count("Tony");
console.count("Steve");
console.count("Tony");
console.count("Tony");

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    })

console.table(dogs);