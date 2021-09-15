
    



const url = new URL(location.href);
const id = url.searchParams.get("id");
//console.log(id)
const products2 = document.getElementById("products2");
//console.log(products2)

 
//-------------------------Affichage page product----------------------------------//


 const fetchProductDisplay = async () =>  { 
  await  fetch ("http://localhost:3000/api/teddies/"+ id)
    .then ((res) => res.json())
    .then ((data) =>  {
        
//--------------------------structure des données du produit-------------------//

     products2.innerHTML = 
    
    `
<div class= "bloc-product">
    <img class="card-img-top picture2 shadow" src=${data.imageUrl}>
    <div class= "bloc-info">
        <h3>${data.name} </h3>
        <h6>Description :</h6>
        <p>  
            ${data.description}
        </p></br>
        <p>Prix : <strong>${data.price /100}€</strong></p>
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
 //--------------utilisation de la boucle FOR pour gérer l'option couleur--------//   
    
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

//-------------------pointage du bouton Ajouter pour le addEventListener---------//

    const ajouterPanier = document.getElementById("btn_ajouter")
    //console.log(ajouterPanier);

//---------------pointage des inputs du DOM pour récupérer les values--------------//

    const quantity = document.getElementById("quantity");
    //console.log(quantity);
    const color = document.getElementById("color");
    //console.log(color);

    //---création objet à envoyer au local storage----//
    
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
    let products = JSON.parse(localStorage.getItem("products"));

    const ajoutProduitLocalStorage = ()=>{

        produitLocalStorage.push(optionsProduit);
        products.push(data._id);
        localStorage.setItem("produit",JSON.stringify(produitLocalStorage));
        localStorage.setItem("products",JSON.stringify(products));
        
    };
        
    const confirmationAjoutPanier = alert("Le produit a été ajouté à votre panier avec succès !")
            
    if(produitLocalStorage){
    
        ajoutProduitLocalStorage();
        confirmationAjoutPanier;
    }
    else{

        produitLocalStorage = [];
        products =[];
        ajoutProduitLocalStorage();
        confirmationAjoutPanier;
        //console.log(produitLocalStorage);
    
    }
});

})};

fetchProductDisplay();
  




 
    
   

   