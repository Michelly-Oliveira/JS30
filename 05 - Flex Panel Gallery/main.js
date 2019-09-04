let panels = document.querySelectorAll(".panel");

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    // Only add/remove the class after the panel has grown/closed completly
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}