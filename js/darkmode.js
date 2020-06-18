let darkmode = localStorage.getItem('darkmode');
const darkModeToggle = document.querySelector('#darkmode');

// Check if DarkMode is enabled
// If it's enabled, change to Light mode
// If it's disabled, change to Dark mode (default)

const enableDarkMode = () => {
    // 1. Add the class 'darkmode' to the body
    document.body.classList.add('darkmode');
    // 2. Update localstorage variable
    localStorage.setItem('darkmode', 'enabled');
}

const disableDarkMode = () => {
    // 1. Remove the class 'darkmode' from the body
    document.body.classList.remove('darkmode');
    // 2. Update localstorage variable
    localStorage.setItem('darkmode', 'disabled');
}

// Check the local storage value for when reloading the page
if (darkmode == 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    // Get the value from localstorage
    darkmode = localStorage.getItem('darkmode');
    // If it's not enabled, the enable. else disable
    if (darkmode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    };
});