document.addEventListener('DOMContentLoaded', () => {
    // Initial load
    loadProducts();
});

function loadProducts() {
    const productList = [
        { name: "Nice Shoes", price: "$199", category: "Clothing", imgSrc: "images/air-jordan-1-mid-shoes-86f1ZW.png" },
        { name: "More Shoes", price: "$139", category: "Clothing", imgSrc: "images/nike.jpeg" },
        { name: "Airpods", price: "$77", category: "Electronics", imgSrc: "images/pods.jpeg" },
        { name: "Expensive Phone", price: "$885", category: "Electronics", imgSrc: "images/11pro.jpg" },
    ];

    const productContainer = document.getElementById('product-list');

    productList.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.dataset.category = product.category;

        const productImage = document.createElement('img');
        productImage.src = product.imgSrc;
        productImage.alt = product.name;

        const productText = document.createElement('p');
        productText.className = 'textword';
        productText.textContent = `${product.name} - ${product.price}`;

        productDiv.appendChild(productImage);
        productDiv.appendChild(productText);
        productContainer.appendChild(productDiv);
    });
}

function filterCategory(category) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        if (product.dataset.category === category || category === 'All') {
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    });
}

function searchProducts() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const productName = product.querySelector('.textword').textContent.toLowerCase();
        if (productName.includes(searchInput)) {
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    });
}
