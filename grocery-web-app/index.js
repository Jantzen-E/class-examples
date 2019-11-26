const productListElement = document.querySelector('.products');
const cart = [];

axios.get('http://localhost:3000/api/products')
        .then(function (response) {
            const products = response.data;
            const productElementList = document.createElement('div');
            productElementList.classList.add('products');
 
            for(let i = 0; i < products.length; i++) { 
                const p = products[i];
                const nameElement = document.createElement('div');
                nameElement.textContent = p.title;
                const priceElement = document.createElement('div');
                priceElement.textContent = `\$${p.price}`;
                const productElement = document.createElement('div');
                
                const imageElement = document.createElement('img');
                
                imageElement.src = `/images/${p.url}`;
                productElement.append(imageElement);


                productElement.append(nameElement);
                productElement.append(priceElement);
                productElement.classList.add('col');
                
                productElementList.append(productElement);
            }
            
            productListElement.replaceWith(productElementList);
        // handle success
        // debugger
        // console.log(response);
        
        // add to the DOM
        })
        .catch(function (error) {
        // handle error
        debugger;
        console.log(error);
        });