const productForm = document.querySelector('#productForm');
productForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
        const call = await fetch('https://fakestoreapi.com/products', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                title: productForm.elements.title.value,
                price: productForm.elements.price.value,
                description: productForm.elements.description.value
            })
        });
        const a= await call.json(); 
            console.log(a); 
      } catch (error) {
        console.error('Error:', error); 
    }
});
