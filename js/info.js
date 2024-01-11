
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