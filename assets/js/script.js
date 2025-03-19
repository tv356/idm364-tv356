function displayProducts(products, showAll = false) {

    console.log('product', products);
    const productContainer = document.querySelector('.nature-section .row');
    const loadMoreContainer = document.querySelector('.load-more-container');
    productContainer.innerHTML = '';

    
    const productsToShow = showAll ? products : products.slice(0, 4); 

    // show product
    productsToShow.forEach(product => {
        const productHtml = `
            <div class="col-md-6 col-lg-3 product-item" data-id="${product.id}">
                <div class="nature-best-item">
                    <img src="assets/images/${product.image}.png" class="card-img-top" alt="${product.name}" />
                    <div class="nature-best-body">
                        <h5 class="nature-best-title">${product.name}</h5>
                        <p class="nature-best-text">${product.price}</p>
                    </div>
                </div>
            </div>
        `;
        productContainer.innerHTML += productHtml;
    });

    if (!showAll && products.length > 4) {
        loadMoreContainer.innerHTML = '<div class="nature-seemore">SEE MORE</div>';
        loadMoreContainer.querySelector('.nature-seemore').onclick = () => loadProducts(true, 'ALL-IN-ONE'); 
    } else {
        loadMoreContainer.innerHTML = ''; 
    }

    // click product
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        item.addEventListener('click', () => {
            
            const productId = item.getAttribute('data-id');
            
            const selectedProduct = products.find(product => product.id == productId);

            // save products
            localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));

            // redirect
            window.location.href = 'productPage.html';
        });
    });
}

function loadProducts(showAll = false, category = 'ALL-IN-ONE') {
    const productsRef = database.ref('products');

    // category all in one
    if (category == 'ALL-IN-ONE') {
        productsRef.once('value')
            .then((snapshot) => {
                const products = [];
                snapshot.forEach((childSnapshot) => {
                    products.push(childSnapshot.val());
                });

                displayProducts(products, showAll);
            })
            .catch((error) => {
                console.error("Error fetching products: ", error);
            });
    } else {
       
        productsRef.orderByChild('category').equalTo(category).once('value')
            .then((snapshot) => {
                const products = [];
                snapshot.forEach((childSnapshot) => {
                    products.push(childSnapshot.val());
                });

                displayProducts(products, showAll); 
            })
            .catch((error) => {
                console.error("Error fetching products: ", error);
            });
    }
    
}


document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop(); 

    if (currentPage === 'index.html' || currentPage === 'productPage.html') {
        loadProducts(); 
    } else if (currentPage === 'shop.html') {
        loadProducts(true); 
    }

    const tabs = document.querySelectorAll('.nature-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            loadProducts(false, tab.textContent); 
        });
    });
});
