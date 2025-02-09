//Ici on va gérer l'apparition de asideFull

let Aside = document.getElementById("aside");
let MenuPrincipal = document.getElementById("MenuPrincipal");

MenuPrincipal.addEventListener("click", ()=>{
    Aside.classList.toggle("activeTransition");
})


//Ici on va gérer l'apparition des différents menus

let MenuClient = document.getElementById("MenuClients");
let SousMenuClient = document.getElementById("Clients");

MenuClient.addEventListener("click", ()=>{
    SousMenuClient.classList.toggle("active");
    SousMenuClient.classList.toggle("activeTransitionY");
})

let MenuEmployes = document.getElementById("MenuEmployes");
let SousMenuEmployes = document.getElementById("Employes");

MenuEmployes.addEventListener("click", ()=>{
    SousMenuEmployes.classList.toggle("activeTransitionY");
})


let MenuFacturation = document.getElementById("MenuFacturation");
let Facturation = document.getElementById("Facturation");

MenuFacturation.addEventListener("click", ()=>{
    Facturation.classList.toggle("activeTransitionY");
})


let MenuEntreprise = document.getElementById("MenuEntreprise");
let Entreprise = document.getElementById("Entreprise");

MenuEntreprise.addEventListener("click", ()=>{
    Entreprise.classList.toggle("activeTransitionY");
})

let MenuParametres = document.getElementById("MenuParametres");
let Parametres = document.getElementById("Parametres");

MenuParametres.addEventListener("click", ()=>{
    Parametres.classList.toggle("activeTransitionY");
})
