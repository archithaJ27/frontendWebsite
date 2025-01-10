document.addEventListener('DOMContentLoaded', function() {
    // Sample product data
    const products = [
        { id: 1, name: 'Vitamin C', price: 19.99, description: 'Boost your immune system' },
        { id: 2, name: 'Pain Reliever', price: 9.99, description: 'Quick relief from headaches' },
        { id: 3, name: 'First Aid Kit', price: 29.99, description: 'Essential emergency care' }
    ];

    // Render product list
    const productContainer = document.getElementById('products');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="images/product-placeholder.jpg" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>$${product.price}</strong></p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });

    // Cart functionality (for simplicity, just in the browser)
    let cart = [];

    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        cart.push(product);
        updateCart();
    };

    function updateCart() {
        const cartTableBody = document.querySelector('#cart-table tbody');
        cartTableBody.innerHTML = '';

        cart.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.name}</td>
                <td>$${product.price}</td>
                <td>1</td>
                <td><button onclick="removeFromCart('${product.id}')">Remove</button></td>
            `;
            cartTableBody.appendChild(row);
        });
    }

    window.removeFromCart = function(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCart();
    };
});
