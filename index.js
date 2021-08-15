let productData = [];

const fetchProduct = async () => { 
  await fetch ( "http://localhost:3000/api/teddies")
    .then((res) => res.json())
    .then ((data) => (productData = data));

    console.log(productData)
};

const productDisplay = async () =>{
    await fetchProduct();

    document.body.innerHTML = productData
    .map( 
        (product) =>
        `
        <div class="card">
        <img src=${product.name}
        </div>

        `

    )

};
productDisplay();
