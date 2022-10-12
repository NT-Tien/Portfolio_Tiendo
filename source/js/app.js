
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


// for mobile screen
document.getElementById('more-options').addEventListener('click', openBoardOptions);
function openBoardOptions() {
    var display = document.getElementById("board-options");
    var style = getComputedStyle(display);
    if (style.display == 'none') {
        display.style.display = 'block';
    } else {
        display.style.display = 'none';
    }
}
document.getElementById('dropdown-mobile').addEventListener('click', droplistMobile);
function droplistMobile() {
    var display = document.getElementById('droplist-mobile');
    var style = getComputedStyle(display);
    if (style.display == 'none') {
        display.style.display = 'block';
    } else {
        display.style.display = 'none';
    }
}