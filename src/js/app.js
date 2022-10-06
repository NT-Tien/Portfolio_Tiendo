
var eventDropdown = document.getElementById("dropdown-title");
eventDropdown.addEventListener('click', dropdown);


function dropdown() {
    var display = document.getElementById("dropdown-list");
    var style = getComputedStyle(display);
    if (style.display == 'none') {
        display.style.display = 'block';
    } else if (style.display == 'block') {
        display.style.display = 'none';
    }
}