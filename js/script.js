/** Scroll to top button implementation in vanilla JavaScript (ES6 - ECMAScript 6) **/

let intervalId = 0; // Needed to cancel the scrolling when we're at the top of the page
const $scrollButton = document.querySelector('.scroll'); // Reference to our scroll button

function scrollStep() {
    // Check if we're at the top already. If so, stop scrolling by clearing the interval
    if (window.pageYOffset === 0) {
        clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
}

function scrollToTop() {
    // Call the function scrollStep() every 16.66 millisecons
    intervalId = setInterval(scrollStep, 41.66);
}

// When the DOM is loaded, this click handler is added to our scroll button
$scrollButton.addEventListener('click', scrollToTop);

function PlaySound(soundobj) {
    let thissound = document.getElementById(soundobj);
    thissound.play();
    document.getElementById(soundobj).loop = true;
}

function StopSound(soundobj) {
    let thissound = document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}

let halalTips = ["1", "2", "3"];

window.onscroll = function () {
let audioStart = document.getElementById("gifMusic");
    
const gifBanner = document.getElementById("gifBanner");
let offsetTop = gifBanner.getBoundingClientRect("gifBanner").top;
let offsetBottom = gifBanner.getBoundingClientRect("gifBanner").bottom;
    
    if (gifBanner.getBoundingClientRect().top <= 0) 
    {
        audioStart.play();
    } 
    if (gifBanner.getBoundingClientRect().top <= -720)
    {
        audioStart.pause();
    }
}

