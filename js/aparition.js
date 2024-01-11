function handleScrollAppear() {
    var elementsToAppear = document.querySelectorAll('.scroll-appear');

    elementsToAppear.forEach(function(element) {
        var position = element.getBoundingClientRect();

        // Check if the element is in the viewport
        if (position.top <= window.innerHeight * 0.75) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        } else {
            element.style.opacity = 0;
            element.style.transform = 'translateY(20px)';
        }
    });
}

// Attach the function to the scroll event
window.onscroll = handleScrollAppear;

// Initial check on page load
window.onload = handleScrollAppear;