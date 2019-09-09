// Run the checkSlide function every 20 ms
// Don't call the function every time the event happens
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    sliderImages.forEach(sliderImage => {
        // Half way through the image
        //window.scrollY = pixels scrolled vertically from the top of the window
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;

        // Bottom of the image
        //offsetTop = top position relative to the top of the window
        const imageBottom = sliderImage.offsetTop + sliderImage.height;

        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPAst = window.scrollY < imageBottom;

        if(isHalfShown && isNotScrolledPAst) {
            sliderImage.classList.add("active");
        } else {
            sliderImage.classList.remove("active");
        }

        console.log(sliderImage.offsetTop);
    });
}

window.addEventListener("scroll", debounce(checkSlide));