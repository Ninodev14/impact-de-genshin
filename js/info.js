
var Back = document.getElementById("informationBoxBack");
function showInformationBox(boxId) {
    // Hide all information boxes
    var allBoxes = document.querySelectorAll('.information-box');
    allBoxes.forEach(function(box) {
      box.style.display = 'none';
    });

    var targetBox = document.getElementById(boxId);
    if (targetBox) {
    targetBox.style.display = 'block';
}
}


function toggleInformationBoxes() {
// Hide all elements with class 'information-box'
var allBoxes = document.querySelectorAll('.information-box');
allBoxes.forEach(function(box) {
  box.style.display = 'none';
});
Back.style.display = 'block';
}


document.querySelectorAll('.bar').forEach(function(bar) {
bar.addEventListener('mousemove', function(e) {
  var tooltip = this.querySelector('.tooltip');
  var rect = this.getBoundingClientRect();

  var offsetX = e.clientX - rect.left;
  var offsetY = e.clientY - rect.top;

  tooltip.style.left = offsetX + 'px';
  tooltip.style.top = offsetY + 'px';
});
});


function adjustWidths() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var elements = document.getElementsByClassName('bar');

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var currentWidth = parseFloat(element.style.width);

    if (screenWidth < 960) {
      // If screen size is smaller than 1200 pixels, set width to half
      element.style.width = (currentWidth / 1.5) + '%';
    } else {
      // If screen size is 1200 pixels or larger, reset to the original width
      element.style.width = (currentWidth) + '%'; // Reset to the original width specified in the style attribute
    }
  }
}

// Call the function on page load and resize
window.addEventListener('load', adjustWidths);