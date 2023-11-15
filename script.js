// Sample product data(sort adn)
const products = [
    { name: 'T-Shirt', category: 'clothing', price: 19.99 },
    { name: 'Jeans', category: 'clothing', price: 49.99 },
    { name: 'Watch', category: 'accessories', price: 99.99 },
    // Add more products as needed
];

// Function to display products
function displayProducts(products) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
        `;
        productsContainer.appendChild(productItem);
    });
}

// Function to sort products
function sortProducts() {
    const sortSelect = document.getElementById('sort');
    const selectedSort = sortSelect.value;

    const sortedProducts = [...products];

    if (selectedSort === 'name') {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedSort === 'price') {
        sortedProducts.sort((a, b) => a.price - b.price);
    }

    displayProducts(sortedProducts);
}

// Function to filter products
function filterProducts() {
    const filterSelect = document.getElementById('filter');
    const selectedFilter = filterSelect.value;

    const filteredProducts = selectedFilter === 'all' ? [...products] : products.filter(product => product.category === selectedFilter);

    displayProducts(filteredProducts);
}
