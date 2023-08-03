// select button and links
const navBtn = document.querySelector("#nav-toggle");
const links = document.getElementById("nav-links");
const modeBtn = document.querySelector(".mode-btn");
const searchBtn = document.querySelector("#search");
const smoothScroll = document.querySelector(".smooth-scroll");

// Disabling the search button
if (searchBtn) {

    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
    });
}


window.addEventListener('DOMContentLoaded', () => {

    const mode = localStorage.getItem('mode');

    // console.log(mode);

    if (mode === 'light') {

        document.documentElement.classList.remove('dark-mode');

    }

    if (mode === 'dark') {

        document.documentElement.classList.add('dark-mode');

    }

});


// add event listener
navBtn.addEventListener("click", () => {
    // console.log(`hello`);
    links.classList.toggle("show-links");
    modeBtn.classList.toggle("show-mode-btn");
});

// Targetting the switch button
const switchBtn = document.querySelector('.mode-btn');
// console.log(switchBtn);

// Adding the 'click' event listener to the switch button
switchBtn.addEventListener('click', () => {

    // Togging the '.dark-mode' class on the html element
    document.documentElement.classList.toggle('dark-mode');

    // Checking if the html element contains class of '.dark-mode'
    if (document.documentElement.classList.contains('dark-mode')) {

        // Changing button's text content to 'light mode'
        switchBtn.textContent = 'light mode';

        // 
        localStorage.setItem('mode', 'dark');

    } else {

        // Changing button's text content to 'dark mode'
        switchBtn.textContent = 'dark mode';

        // 
        localStorage.setItem('mode', 'light');

    }

});

// Smooth Scroll
smoothScroll.addEventListener("click", (e) => {

    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 62;

    window.scrollTo({
        left: 0,
        top: position,
        behavior: "smooth"
    });

});