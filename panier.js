function panierVide() {
  if (produitLocalStorage == null || produitLocalStorage == 0) {
    return true;
  } else {
    return false;
  }
}

let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.log(produitLocalStorage);

let products = JSON.parse(localStorage.getItem("products"));

console.log(products);
//-----------------------------contenu du panier-------------------------------------//

const panierContainerDisplay = () => {
  const products3 = document.getElementById("selection");
  console.log(products3);
  let produitPanier = [];
  if (produitLocalStorage === null || produitLocalStorage == 0) {
    const panierVideDisplay = `
    
        <div class="panierVide">Votre panier est vide !<div/>
    
        `;
    products3.innerHTML = panierVideDisplay;
  } else {
    for (i = 0; i < produitLocalStorage.length; i++) {
      produitPanierDisplay = `
            
            <div class="box_panier">
            
            <img src="${produitLocalStorage[i].image} " alt="" class="picture3 shadow">
            <div class="description_produit">
            <p>Nom : ${produitLocalStorage[i].nomProduit} </p>
            <p>Modèle : ${produitLocalStorage[i].idProduit} </p>
            <p>Couleur : ${produitLocalStorage[i].couleur} </p>
            <p>Quantité : ${produitLocalStorage[i].quantite} </p>
            <p>Total : ${produitLocalStorage[i].prix} € </p>
            </div>
            <div class="btn_supprimer">
            <button id = "supprimer"><i class="fas fa-trash-alt"></i></button>
            </div>
            </div>
            `;

      products3.innerHTML += produitPanierDisplay;
    }
  }

  //----------------------------total panier----------------------------------------//
  let totalPanier = [];

  if (panierVide() == false) {
    for (let k = 0; k < produitLocalStorage.length; k++) {
      totalPanier.push(produitLocalStorage[k].prix);
      //console.log(totalPanier);
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const prixTotalPanier = totalPanier.reduce(reducer);
    //console.log(prixTotalPanier);
    const prixTotalDisplay = `<div class="prix_total">
    Montant total : ${prixTotalPanier} €
    </div>
    
    `;
    products3.insertAdjacentHTML("beforeend", prixTotalDisplay);
    localStorage.setItem("prixTotalPanier", JSON.stringify(prixTotalPanier));
    console.log();
  }
};

panierContainerDisplay();

//----------------------------------------fin---------------------------------------//

//----------------------création bouton supprimer article du panier----------------//
const removeProduct = () => {
  let btn_supprimer = document.querySelectorAll("#supprimer");

  if (panierVide() == false) {
    for (let j = 0; j < produitLocalStorage.length; j++) {
      btn_supprimer[j].addEventListener("click", (e) => {
        e.preventDefault();
        let produitSupprimer = produitLocalStorage[j].idProduit;
        console.log(produitSupprimer);

        produitLocalStorage = produitLocalStorage.filter(
          (el) => el.idProduit !== produitSupprimer
        );
        console.log(produitLocalStorage);
        localStorage.setItem("produit", JSON.stringify(produitLocalStorage));

        window.location.href = "panier.html";
      });
    }
  }
};
removeProduct();
//--------------------------------fin---------------------------------------------//

//-------------------------------formulaire de contact-------------------------------//

if (panierVide() == false) {
  const formulaireDisplay = () => {
    const containerFormulaire = document.getElementById("formulaire-contact");
    console.log(containerFormulaire);

    //-------------------------structure du formulaire ----------------------------//

    const structureFormulaire = `
        <form class=" mx-auto my-5 col-12 col-md-8  " id="form">
        <h2 id="titre_formulaire">Formulaire de contact</h2>
        <div class="prenom-container">
        <label for="prenom">Prénom </label></br>
    <input type="text" id="prenom" class=" m-auto" name="prenom" required>
    <span></span>
    </div>
    
    <div class="nom-container">
    <label for="nom">Nom </label></br>
    <input type="text" id="nom" class=" m-auto" name="nom" required>
    <span></span>
    </div>
    
    <div class="adresse-container">
    <label for="adresse">Adresse </label></br>
    <textarea name="adresse" id="adresse" class=" m-auto " required></textarea>
    <span></span>
    </div>
    
    <div class="ville-container">
    <label for="ville">Ville </label></br>
    <input type="text" id="ville" name="ville" class=" m-auto" required>
    <span></span>
    </div>
    
    <div class="codepostal-container">
    <label for="codepostal">Code Postal </label></br>
    <input type="text" id="codepostal" name="codepostal" class=" m-auto" required>
    <span></span>
    </div>
    
    <div class="email-container">
    <label for="email">E-mail </label></br>
    <input type="text" id="email" name="email" class=" m-auto" required>
    <span>E-mail incorrect</span>
    </div>
    
    <button id="btn_formulaire" type="submit" name="btn_formulaire" class=" col-6 col-md-4 mx-auto my-3">Commander</button>
    </form>
    
    `;

    containerFormulaire.innerHTML = structureFormulaire;
  };
  formulaireDisplay();

  //----------------------------------validation formulaire-----------------------------//

  const inputs = document.querySelectorAll(
    'input[type="text"], input [type="text"], textarea '
  );

  let prenom, nom, adresse, ville, codepostal, email;

  //-----------------------fonction affichage erreur--------------------//

  const errorDisplay = (tag, message, valid) => {
    const container = document.querySelector("." + tag + "-container");
    const span = document.querySelector("." + tag + "-container > span");

    if (!valid) {
      container.classList.add("error");
      span.textContent = message;
    } else {
      container.classList.remove("error");
      span.textContent = message;
    }
  };
  //----------------fonctions des conditions de validité pour chaque input-------------------//

  const prenomChecker = (value) => {
    if (value.length > 0 && (value.length < 3 || value.length > 20)) {
      errorDisplay("prenom", "Le prénom doit faire entre 3 et 20 caractères");
      prenom = null;
    } else {
      errorDisplay("prenom", "", true);
      prenom = value;
    }
  };
  const nomChecker = (value) => {
    if (value.length > 0 && (value.length < 3 || value.length > 20)) {
      errorDisplay("nom", "Le nom doit faire entre 3 et 20 caractères");
      nom = null;
    } else {
      errorDisplay("nom", "", true);
      nom = value;
    }
  };
  const adresseChecker = (value) => {
    if (!value.match(/^[A-Za-z0-9\s]{5,50}$/)) {
      errorDisplay(
        "adresse",
        "L'adresse doit faire entre 5 et 50 caractères et ne doit pas contenir de caractères spéciaux"
      );
      adresse = null;
    } else {
      errorDisplay("adresse", "", true);
      adresse = value;
    }
  };

  const villeChecker = (value) => {
    if (value.length > 0 && (value.length < 3 || value.length > 30)) {
      errorDisplay("ville", " La ville doit faire entre 3 et 30 caractères");
      ville = null;
    } else {
      errorDisplay("ville", "", true);
      ville = value;
    }
  };

  const codePostalChecker = (value) => {
    if (!value.match(/^[0-9]{5}$/)) {
      errorDisplay("codepostal", " Le code postal n'est pas valide");
      codepostal = null;
    } else {
      errorDisplay("codepostal", "", true);
      codepostal = value;
    }
  };

  const emailChecker = (value) => {
    if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
      errorDisplay("email", "Le mail n'est pas valide");
      email = null;
    } else {
      errorDisplay("email", "", true);
      email = value;
    }
  };
  //--------------------création d'un addEventListener pour chaque input---------//

  inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      switch (e.target.id) {
        case "prenom":
          prenomChecker(e.target.value);
          break;
        case "nom":
          nomChecker(e.target.value);
          break;
        case "adresse":
          adresseChecker(e.target.value);
          break;
        case "ville":
          villeChecker(e.target.value);
          break;
        case "codepostal":
          codePostalChecker(e.target.value);
          break;
        case "email":
          emailChecker(e.target.value);
          break;
        default:
          nul;
      }
    });
  });

  //--transfert de l'objet "contact" du  formulaire dans le local storage---//

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const validationCommande = () => {
      if (prenom && nom && adresse && ville && codepostal && email) {
        const contact = {
          firstName: prenom,
          lastName: nom,
          address: adresse,
          city: ville,
          email: email,
        };

        localStorage.setItem("contact", JSON.stringify(contact));
        console.log(contact);

        //-----------------------données à envoyer au serveur-----------------------//

        const envoyerServeur = {
          contact,
          products,
        };
        console.log(envoyerServeur);

        //-----------------------------requête POST-----------------------------------//

        const sendData = fetch("http://localhost:3000/api/teddies/order", {
          method: "POST",
          body: JSON.stringify(envoyerServeur),

          headers: {
            "content-type": "application/json",
          },
        });
        //---------------------------réponse du serveur-----------------------------------//

        sendData
          .then((res) => res.json())
          .then((data) => {
            const responseServeur = data.orderId;
            localStorage.setItem("orderId", responseServeur);
            window.location = "confirmation.html";
          });
      }
    };
    validationCommande();
  });
}
