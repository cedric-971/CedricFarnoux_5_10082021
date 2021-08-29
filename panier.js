let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.log(produitLocalStorage);

const products3 = document.getElementById("selection");
console.log(products3)
let produitPanier =[];
if (produitLocalStorage ===null){
    const panierVide =
    `
<div class="">
<div>Votre panier est vide<div/>
</div>
`;
products3.innerHTML = panierVide;
}else{
    
    for(i = 0; i<produitLocalStorage.length; i++){
       produitPanier = 
       `
       
       <img src="" alt="">
       <p>Nom :${produitLocalStorage[i].nomProduit} </p>
       <p>Modèle :${produitLocalStorage[i].idProduit} </p>
       <p>Couleur :${produitLocalStorage[i].couleur} </p>
       <p>Quantité :${produitLocalStorage[i].quantite} </p>
       <p>Total :${produitLocalStorage[i].prix} </p>
        <button id = "supprimer">supprimer</button>
       `;

       products3.innerHTML += produitPanier;

    

    }

}

  let btn_supprimer = document.querySelectorAll("#supprimer");
  console.log(supprimer);
  
  for ( let j = 0 ; j < produitLocalStorage.length; j++){
      
        btn_supprimer[j].addEventListener("click",(e)=>{
        e.preventDefault(); 
        let produitSupprimer = produitLocalStorage[j].idProduit;
        console.log(produitSupprimer);

        
     })
     
  }
