const orderId = localStorage.getItem("orderId");
console.log(orderId);
const prixTotalPanier = localStorage.getItem("prixTotalPanier");
console.log(prixTotalPanier);


//------------------------affichage confirmation commande---------------------//


const confirmationDisplay = () => {
    const containerConfirmation =document.getElementById("confirmation");
    console.log(containerConfirmation);
    const structureConfirmation=
    `
<div id="bloc-confirmation" class="col-8 mx-auto p-0">
    <h1 id="titre-confirmation">Confirmation de votre commande</h1>
    <p>Votre commande numéro :<strong> ${orderId}</strong> </br> a bien été prise en compte</p>
    <p>Le montant de votre commande est de : <strong>${prixTotalPanier} €</strong> </p>
    <p>Merci pour votre confiance</p>
</div>
<a href="index.html">
<button class= "retour-accueil mx-auto">Retour à la page d'accueil</button>
</a> 
    
    `;

    containerConfirmation.innerHTML=structureConfirmation;
};
confirmationDisplay();

//------vider automatiquement le panier apres confirmation de la commande-----------//

function removeLocalStorage(key){

    localStorage.removeItem(key)
   
};
removeLocalStorage("produit");
removeLocalStorage("prixTotalPanier");
removeLocalStorage("products");
removeLocalStorage("orderId");

//------------retour page index si panier vide-------------------//

if (orderId == null || prixTotalPanier == null) {
    window.location.href="index.html";
   
};