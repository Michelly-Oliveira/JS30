const nav = document.querySelector('#main');
// How many pixels from the top
const topOfNav = nav.offsetTop;

function fixNav() {
  //   window.scrollY = how many pixels we have scrolled
  if (window.scrollY >= topOfNav) {
    //   Add the height of the nav to padding-top so the content bellow the nav doesn't jump up
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav);
