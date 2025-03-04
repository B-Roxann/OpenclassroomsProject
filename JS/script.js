/******************************************************************************/
/*************Ici on va gérer l'ovuerture et la fermeture de aside*************/
/******************************************************************************/
let Aside = document.getElementById("aside");
let MenuPrincipalId = document.getElementById("MenuPrincipal");
let barre_separation = document.querySelectorAll(".barre-separation");
let SousMenuContainer = document.querySelectorAll(".SousMenuContainer");

MenuPrincipalId.addEventListener("click", ()=>{
    //Gestion ouverture/fermeture aside
    Aside.classList.toggle("activeTransition");
    
    //Gestion apparition des barres de séparation des menus
    for(i = 0 ; i < barre_separation.length ; i++){
        barre_separation[i].classList.toggle("active");
    };

    //Gestion de la fermeture des sous-menus lors de la fermeture de aside
    for(i = 0 ; i < SousMenuContainer.length ; i++){
        if(SousMenuContainer[i].classList.contains("active") || SousMenuContainer[i].classList.contains("activeTransitionY") ){
            SousMenuContainer[i].classList.remove("active");
            SousMenuContainer[i].classList.remove("activeTransitionY");
        }
    }
})




/***************************************************************************/
/*************Ici on va gérer l'apparition des différents menus*************/
/***************************************************************************/

/**
 * On va récupérer tous les éléments de classe "MenuContainer" et pour chacun d'eux on va rajouter un écouteur d'évenement "click"
 * Lorsque l'on clique sur un élément de classe "MenuContainer" on va vérifier si il existe un élément de classe "SousMenuContainer" à afficher
 * Si il existe on va le faire apparaitre
 * Si il n'existe pas on affiche un message d'erreur
 * @param {HTMLElement} Menu_Principal : élément de classe "MenuPrincipal" sur lequel on a cliqué
 * @param {HTMLElement} SousMenuContainer : élément de classe "SousMenuContainer" à afficher
 * @param {HTMLElement} Aside : élément aside à ouvrir si il est fermé
 */


let Menu_Principal = document.querySelectorAll(".MenuPrincipal");


for(let i = 0; i < Menu_Principal.length ; i++ ){
    
    //Ecouteur d'évenement "click" sur Menu_Principal
    Menu_Principal[i].addEventListener("click", (event)=>{

        //On récupère le SousMenuContainer à afficher
        let sous_menu_container = event.currentTarget.nextElementSibling;

        //S'il existe 
        if(sous_menu_container && sous_menu_container.classList.contains("SousMenuContainer")){
        
            //On vérifie avant que la barre aside ne soit pas fermée
            if(Aside.classList.contains("activeTransition")){
                //Si elle est bien ouverte alors on déroule le SousMenuContainer
                sous_menu_container.classList.toggle("active");
                sous_menu_container.classList.toggle("activeTransitionY");
            }else{
                //Sinon on ouvre
                Aside.classList.toggle("activeTransition");
                //On rajoute les barre_separation
                for(i = 0 ; i < barre_separation.length ; i++){
                    barre_separation[i].classList.toggle("active");
                }
                //On déroule le SousMenuContainer
                sous_menu_container.classList.toggle("active");
                sous_menu_container.classList.toggle("activeTransitionY");
            }
        }
    })
}









/***********************************************/
/*******************Test zone*******************/
/***********************************************/
