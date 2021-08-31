let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.log(produitLocalStorage);

//-----------------------------contenu du panier-------------------------------------//

const products3 = document.getElementById("selection");
console.log(products3)
let produitPanier =[];
if (produitLocalStorage ===null ||produitLocalStorage==0){
    const panierVideDisplay =
    `
<div class="">
<div>Votre panier est vide<div/>
</div>
`;
products3.innerHTML = panierVideDisplay;
}else{
    
    for(i = 0; i<produitLocalStorage.length; i++){
       produitPanierDisplay =

       `
       
       <div class="box_panier">
       
       <img src="${produitLocalStorage[i].image} " alt="" class="image">
       <div class="description_produit">
       <p>Nom :${produitLocalStorage[i].nomProduit} </p>
       <p>Modèle :${produitLocalStorage[i].idProduit} </p>
       <p>Couleur :${produitLocalStorage[i].couleur} </p>
       <p>Quantité :${produitLocalStorage[i].quantite} </p>
       <p>Total :${produitLocalStorage[i].prix}€ </p>
       </div>
       <div class="btn_supprimer">
       <button id = "supprimer">supprimer</button>
       </div>
        </div>
       `;

       products3.innerHTML += produitPanierDisplay;

    

    }

}
//----------------------------------------fin---------------------------------------//


//----------------------création bouton supprimer article du panier----------------//

  let btn_supprimer = document.querySelectorAll("#supprimer");
  console.log(supprimer);
  
  for ( let j = 0 ; j < produitLocalStorage.length; j++){
   
        btn_supprimer[j].addEventListener("click",(e)=>{
        e.preventDefault(); 
        let produitSupprimer = produitLocalStorage[j].idProduit;
        console.log(produitSupprimer);

        produitLocalStorage = produitLocalStorage.filter(el =>el.idProduit!== produitSupprimer);
        console.log(produitLocalStorage);
        localStorage.setItem("produit",JSON.stringify(produitLocalStorage)); 
        
        window.location.href="panier.html";
     })
     
        
  }
//--------------------------------fin---------------------------------------------//

//----------------------------total panier----------------------------------------//
let totalPanier = [];

for (let k = 0; k < produitLocalStorage.length; k++){

    totalPanier.push(produitLocalStorage[k].prix)
    console.log(totalPanier);
}
const reducer = (accumulator,currentValue) => accumulator + currentValue;
const prixTotalPanier = totalPanier.reduce(reducer);
console.log(prixTotalPanier);
const prixTotalDisplay = 
`<div class="prix_total">
Prix total :${prixTotalPanier} €
</div>

`
products3.insertAdjacentHTML ("beforeend",prixTotalDisplay);

//--------------------------------fin--------------------------------------------//

//-------------------------------formulaire de contact-------------------------------//
const panierDisplay = () => {
    const containerFormulaire =document.getElementById("formulaire-contact");
    console.log(containerFormulaire);
    const structureFormulaire=
    `
<form action="" class=" my-5" id="form">
    <h2 id="titre_formulaire">Formulaire de contact</h2>
    <label for="prenom">Prénom </label>
    <input type="text" id="prenom" class="col-6 m-auto" name="prenom" required>

    <label for="nom">Nom </label>
    <input type="text" id="nom" class="col-6 m-auto" name="nom" required>

    <label for="adresse">Adresse </label>
    <textarea name="adresse" id="adresse" class="col-6 m-auto " required></textarea>

    <label for="ville">Ville </label>
    <input type="text" id="ville" name="ville" class="col-6 m-auto" required>

    <label for="codepostal">Code Postal </label>
    <input type="number" id="codepostal" name="codepostal" class="col-6 m-auto" required>

    <label for="email">E-mail </label>
    <input type="text" id="email" name="email" class="col-6 m-auto" required>

    <button id="btn_formulaire" type="submit" name="btn_formulaire" class=" col-3 mx-auto my-3">Commander</button>
</form>
    
    `;

    containerFormulaire.innerHTML=structureFormulaire;
};
panierDisplay();

//--transferer les données du  formulaire dans le local storage---//
const btnFormulaire = document.getElementById("btn_formulaire");

btnFormulaire.addEventListener("click", (e) => {
    e.preventDefault();
    const objetFormulaire ={
        prenom :localStorage.getItem("prenom"),
        nom :localStorage.getItem("nom"),
        adresse :localStorage.getItem("adresse"),
        ville :localStorage.getItem("ville"),
        codepostal :localStorage.getItem("codepostal"),
        email :localStorage.getItem("email"),

    }
    

    localStorage.setItem("prenom",document.getElementById("prenom").value);
    localStorage.setItem("nom",document.getElementById("nom").value);
    localStorage.setItem("adresse",document.getElementById("adresse").value);
    localStorage.setItem("ville",document.getElementById("ville").value);
    localStorage.setItem("codepostal",document.getElementById("codepostal").value);
    localStorage.setItem("email",document.getElementById("email").value);
    console.log(objetFormulaire);
})
