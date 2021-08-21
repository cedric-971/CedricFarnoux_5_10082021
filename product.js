


const url = new URL(location.href);
const id = url.searchParams.get("id");
console.log(id)
const products2 = document.getElementById("products2");
console.log(products2)

 



  fetch ("http://localhost:3000/api/teddies/"+ id)
    .then ((res) => res.json())
    .then ((data) =>  {
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
        <h6>Prix :</h6>
        <p>${data.price /100}€ </p>
    <form>
    <label for="quantity">Quantité :</label>
        <input type="number" name="quantity" id="quantity"></br>
    
    <label for= "color">Couleur :</label>
        <select name="color" id="color">
            <option value="">--Couleur--</option>
            <option value="${data.colors[0]}">${data.colors[0]}</option>
            <option value="${data.colors[1]}">${data.colors[1]}</option>
            <option value="${data.colors[2]}">${data.colors[2]}</option>
            <option value="${data.colors[3]}">${data.colors[3]}</option>
        </select>
    </form>
    <button onclick="setData()">Ajouter au panier</button>
    </div>
    
</div>
    `
    const form = document.getElementById("quantity");
    console.log(form); 
 }
);



