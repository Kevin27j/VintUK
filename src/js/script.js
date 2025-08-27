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


// fetch bags list from JSON
const bagsContainer = document.querySelector('.product-list');

fetch('../../bags.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(bag => {
            const bagElement = document.createElement('div');
            bagElement.classList.add('product-item');
            bagElement.innerHTML = `
            <div class="product-image">
                <img src=${bag.image} alt="${bag.name}" width="250">
                </div>
                <div class="product-content flex">
                    <h4>${bag.name}</h4>
                    <p>£${bag.price}</p>
                    <a href="#" class="featured-link">Add to Cart</a>
                </div>
            `;
            bagsContainer.appendChild(bagElement);
        });
    })
    .catch(error => console.error('Error fetching bags:', error));
