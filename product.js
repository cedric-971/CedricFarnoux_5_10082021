


const url = new URL(location.href);
const id = url.searchParams.get("id");
console.log(id)
const products2 = document.getElementById("products2");
console.log(products2)

fetch("http://localhost:3000/api/teddies/"+ id)
.then ((res) => res.json())
.then ((data) => (
    products2.innerHTML = 
    
    `
<div class= block>
    <img class="card-img-top picture2 shadow" src=${data.imageUrl}>
    <div class=block_info>
        <h3>${data.name} </h3>
        <h6>Description :</h6>
        <p>  
            ${data.description}
        </p>
        <p>${data.price}  </p>
   
    <p>Couleur : </p><input type = "text">
    <p>Quantité : </p><input type = "text"></br>
    <button>Ajouter au panier</button>
    </div>
    
</div>
    `
)

);

