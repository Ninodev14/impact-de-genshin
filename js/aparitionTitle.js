window.onscroll = function() {
    var elementToAppearh1 = document.getElementById('scroll-appear-h1');
    var position = elementToAppearh1.getBoundingClientRect();

    // Check if the element is in the viewport
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        elementToAppearh1.style.opacity = 1; // Make the element visible
    } else {
        elementToAppearh1.style.opacity = 0; // Hide the element
    }
};