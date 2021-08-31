
    



const url = new URL(location.href);
const id = url.searchParams.get("id");
console.log(id)
const products2 = document.getElementById("products2");
console.log(products2)

 


 const fetchDisplay = async () =>  { 
  await  fetch ("http://localhost:3000/api/teddies/"+ id)
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
    </form>
    <form>
    <label for= "color">Couleur :</label>
        <select name="color" id="color">
            
            
            
        </select>
    </form>
    <button id="btn_ajouter" type="submit" name="btn-ajouter">Ajouter au panier</button>
    </div>
    
</div>
    `
    
    
        const optionCouleur = data.colors;
        let structureCouleur = [];

        for (let i = 0 ; i < optionCouleur.length; i++){
            structureCouleur = structureCouleur +
            `
            <option value="${optionCouleur[i]}">${optionCouleur[i]}</option>
            
            `;
        } 
    const positionCouleur =document.getElementById("color");
    positionCouleur.innerHTML +=structureCouleur;



    const ajouterPanier = document.getElementById("btn_ajouter")
    console.log(ajouterPanier);
    const quantity = document.getElementById("quantity");
    console.log(quantity);
    const color = document.getElementById("color");
    console.log(color);
    
    ajouterPanier.addEventListener("click", (e) =>{
       e.preventDefault();

       let optionsProduit ={
        image : data.imageUrl,   
        nomProduit : data.name,
        idProduit : data._id,
        quantite : quantity.value,
        couleur : color.value,
        prix : data.price*quantity.value/100
    }
    
    
    let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));

    const ajoutProduitLocalStorage = ()=>{
        produitLocalStorage.push(optionsProduit);
        localStorage.setItem("produit",JSON.stringify(produitLocalStorage));

    };

    if(produitLocalStorage){
        ajoutProduitLocalStorage();
    }
    else{
    produitLocalStorage = [];
   ajoutProduitLocalStorage();

    console.log(produitLocalStorage);
}
   

});



})};
 
fetchDisplay();
   

   