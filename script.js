// TOGGLE MENU BUTTON
const menuButton = document.querySelector('.menu-button');
const menuList = document.querySelector('.menu-list');

menuButton.addEventListener("click", () => {
    if (menuList.hasAttribute("hidden")) {
        menuButton.setAttribute('aria-expanded', 'true');
        menuList.removeAttribute("hidden");
    }
    else {
        menuButton.setAttribute('aria-expanded', 'false');
        menuList.setAttribute("hidden", "");

    }
})

// Close the menu when clicking outside
document.addEventListener("click", (event) => {
    if (!menuButton.contains(event.target) && !menuList.contains(event.target)) {
        menuButton.setAttribute('aria-expanded', 'false');
        menuList.setAttribute("hidden", "");
    }
})


// MEDIA QUERY REMOVE MENU BUTTON AND SHOW MENU LIST FOR TABLET/DESKTOP
// const mediaQuery = window.matchMedia('(min-width: 768px)');

// function handleChange(e) {
//     if (e.matches) {
//         menuButton.setAttribute("hidden", "");
//         menuButton.setAttribute('aria-expanded', 'false');
//         menuList.removeAttribute("hidden");
//     } else {
//         menuButton.removeAttribute("hidden");
//         menuList.setAttribute("hidden", "");
//     }
// }
// mediaQuery.addEventListener('change', handleChange);
// handleChange(mediaQuery);
