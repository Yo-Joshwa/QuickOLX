document.getElementById('create-product-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const category = document.getElementById('category').value;
    const images = document.getElementById('images').value.split(',');

    const product = { name, description, price, category, images };

    try {
        const response = await fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        const data = await response.json();
        console.log('Product created:', data);
        alert('Product created successfully!');
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to create product.');
    }
});

document.getElementById('get-products').addEventListener('click', async function() {
    try {
        const response = await fetch('http://localhost:3000/products');
        const products = await response.json();

        const productList = document.getElementById('product-list');
        productList.innerHTML = '';
        products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = `${product.name} - ${product.description} - ${product.price} - ${product.category}`;
            productList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to fetch products.');
    }
});
