document.addEventListener('DOMContentLoaded', () => {
    // product data from localStorage
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

    // cart quantity
    updateCartIcon();

    if (selectedProduct) {
        // product info
        document.querySelector('.product-title').innerHTML = selectedProduct?.name;
        document.querySelector('.product-desc').innerHTML = selectedProduct.description;
        document.querySelector('.product-sale').innerHTML = "95% Natural Ingredients";
        document.querySelector('.product-img').src = `assets/images/${selectedProduct.image}.png`;

        
        document.querySelector('.btn-add-to-cart').addEventListener('click', () => {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(selectedProduct); 
            localStorage.setItem('cart', JSON.stringify(cart)); // save cart

            updateCartIcon(); // update cart
            alert("Add to cart success fully")
        });

        // "Buy Now"
        document.querySelector('.btn-buy-now').addEventListener('click', () => {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(selectedProduct); // add product into cart
            localStorage.setItem('cart', JSON.stringify(cart)); // save cart

            // go to cart
            window.location.href = './viewCart.html';
        });
    } else {
        console.error('No product data found in localStorage');
    }
});

// cart & icon
function updateCartIcon() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.length;

    const bagIcon = document.getElementById('bag');
    if (cartCount > 0) {
        bagIcon.innerHTML = `<img width="18" src="./assets/images/bag-04.svg"/> <span class="cart-count">${cartCount}</span>`;
    } else {
        bagIcon.innerHTML = `<img width="18" src="./assets/images/bag-04.svg"/>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // product from cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // elements in cart
    const cartContainer = document.getElementById('my-cart-body');
    const currentPage = window.location.pathname.split('/').pop();
    
    // Check cart
    if (cart.length > 0 && cartContainer) {

        if (currentPage == 'checkout.html') {
            cart.forEach((product, index) => {
                const productHtml = `
                    <div class="my-cart-item d-flex align-items-center justify-content-between">
                        <div>
                            <img width="87" src="assets/images/${product.image}.png" alt="${product.name}" />
                        </div>
                        <div>
                            <div class="my-cart-item__title">${product.name}</div>
                            <div class="my-cart-item__size">Size:40L-4Pcs</div>
                        </div>
                        <div>1</div>
                        <div class="my-cart-item__price">$${(product.price)}</div>
                    </div>
                `;
                cartContainer.innerHTML += productHtml;
            });
        } else {
            cart.forEach((product, index) => {
                const productHtml = `
                    <div class="my-cart-item d-flex align-items-center justify-content-between">
                        <div class="my-cart-item-img">
                            <img src="./assets/images/checkbox.svg" alt="Product Image" />
                        </div>
                        <div>
                            <img width="87" src="assets/images/${product.image}.png" alt="${product.name}" />
                        </div>
                        <div>
                            <div class="my-cart-item__title">${product.name}</div>
                            <div class="my-cart-item__size">Size:40L-4Pcs</div>
                        </div>
                        <div>1</div>
                        <div class="my-cart-item__price">$${(product.price)}</div>
                        <div class="my-cart-item-img">
                            <img src="./assets/images/delete.svg" alt="Delete" onclick="removeFromCart(${product.id})" />
                        </div>
                    </div>
                `;
                cartContainer.innerHTML += productHtml;
            });
    
            
        }

        // Cost
        const totalAmount = cart.reduce((total, product) => total + (Number(product.price) * 1), 0);
        console.log('totalAmount', totalAmount);
        
        document.getElementById('cartSubtotal').innerHTML = `$${totalAmount}`;
        document.getElementById('cartTotal').innerHTML = `$${totalAmount}`;

        // const shipping = 56.00;
        // const totalWithShipping = totalAmount + shipping;
        // document.getElementById('cartTotal').innerHTML = `$${totalWithShipping}`;

        document.getElementById('signIn').addEventListener('click', () => {
            alert("Cheryl successfully logged into PayPal!");
        });


        document.getElementById('placeOrder').addEventListener('click', () => {
            alert("Yay, you have successfully placed an order!");

            localStorage.removeItem('cart');
        
            // redirect
            window.location.href = 'index.html';
        });
    } else {
        cartContainer.innerHTML = `<p>Your cart is empty.</p>`;
    }
});

// delete products?
function removeFromCart(id) {

    const isConfirmed = window.confirm("Are you sure you want to remove this item from your cart?");
    
    if (isConfirmed) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
        // delete product
        cart = cart.filter(product => product.id !== id);
    
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload(); // reload
    }
}

