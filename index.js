//---Affichage de la page index avec l'ensemble des produits présents dans l'API---//

const fetchIndexDisplay = async () => {
  await fetch("http://localhost:3000/api/teddies")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const productsContainer = document.getElementById("products");
      for (let product of data) {
        //------structure html de la page index pour chaque produit----//

        productsContainer.innerHTML += ` 
            <div class="card mx-auto my-2 shadow ">
                <a href="product.html?id=${product._id}">
                <img class="card-img-top picture" src=${product.imageUrl}>
                <div class= "card-body">
                <h3> ${product.name}</h3>
                        <p> ${product.price / 100}€</p>
                        </div>
                        </a>   
                </div>
                
                `;
        console.log(product);
      }
    });
};
fetchIndexDisplay();
