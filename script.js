let player1 = { symbol : "O", name : "George" } // Object joueur contenant symbole et nom par défaut.
let player2 = { symbol : "X", name : "Georgette"}

let player1Ready = false // Initialisation des joueurs à false. Il faudra cliquer sur OK pour que ça passe true indiquant que le joueur est prêt
let player2Ready = false

let gameFinished = false // Passera à True quand la partie sera terminée !

let name1 = document.getElementById("gamer1Name") // Permettra d'intéragir avec l'ID des noms.
let name2 = document.getElementById("gamer2Name")

let showSymbolP1 = document.getElementById("symbolP1") // Permettra d'intéragir avec le paragraphe qui affiche le symbole des joueurs
let showSymbolP2 = document.getElementById("symbolP2")

let scorePlayer1 = 0 // Initialisation des scores à 0
let scorePlayer2 = 0
let count = 0; // compteur des coups. 9 max.

let showScore1 = document.getElementById("score1") // Permettra d'afficher le score par la suite.
let showScore2 = document.getElementById("score2")

let competitor1 = document.getElementById("competitor1") // competitor 1 et 2 seront les zones d'affichage pour chaque joueur. "A toi de jouer !" ou encore "gagné !"

let competitor2 = document.getElementById("competitor2")

let player = player1.symbol; // Par défaut le player1

let jeu = document.getElementById("gameTitle"); // Pour intéragir avec le titre H1

// CREATION DE LA BOX DE BASE pour l'affichage du quadrillage du morpion ----------------------------------------

const box = document.createElement("div") // créé une div 
box.classList.add("box") // ajoute la classe css à notre box
const board = document.querySelector("#board")


// Creation des Input pour les noms des joueurs et des symboles respectifs

const gamer1Area = document.querySelector("#gamer1Name") // gameArea c'est le titre h2 qui aura le nom du joueur
const gamer2Area = document.querySelector("#gamer2Name")

const inputName1 = document.createElement("input") // création d'un input pour indiquer son nom
const inputName2 = document.createElement("input")

inputName1.value = "Joueur 1" // Par défaut joueur 1 et 2 à l'intérieur de l'input field
inputName2.value = "Joueur 2"

inputName1.classList.add("gamerInput") // Avec leur CSS Respectifs
inputName2.classList.add("gamerInput")

// Au clic des inputField, ça les vide.
inputName1.addEventListener("click", function(){
inputName1.value = ""})
  
inputName2.addEventListener("click", function(){
inputName2.value = ""})

// CREATION DU MENU DEROULANT DES SYMBOLES

const selectSymbol1 = document.createElement("select") // Création de la select field pour select son symbole. Il faudra y ajouter des balises option pour chaque symbole.
const selectSymbol2 = document.createElement("select")

const symbol1 = document.createElement("option") // Ajout des balises options pour ajouter chaque symbole. Obligé de l'afficher pour chaque select. 1 ne fonctionne pas.
const symbol2 = document.createElement("option")

const symbol3 = document.createElement("option") // Pour la selectfield du joueur 2
const symbol4 = document.createElement("option")

symbol1.value = "O" // On ajoute les symboles en value et en textContent pour l'affichage. On inverse volontairement les deux pour un affichage + ergonomique.
symbol2.value = "X"

symbol3.value = "X" 
symbol4.value = "O"

symbol1.textContent = "O" 
symbol2.textContent = "X"

symbol3.textContent = "X"
symbol4.textContent = "O"

selectSymbol1.appendChild(symbol1) // Affichage dans le HTML des différents symboles dans le select.
selectSymbol1.appendChild(symbol2)

selectSymbol2.appendChild(symbol3)
selectSymbol2.appendChild(symbol4)

//------------------------

// Création des 2 boutons "OK" pour que chaque joueur puisse valider son profil
const btnName1 = document.createElement ("button")
const btnName2 = document.createElement ("button")

btnName1.innerText = "OK" // Sans oublier leur contenu respectifs.
btnName2.innerText = "OK"

// Creation du btn pour lancer la partie + sa partie Style CSS
const btnBegin = document.createElement ("button")
btnBegin.classList.add("btnBegin") 
btnBegin.innerText = "Commencer !"

// AFFICHAGE DANS LE HTML DES DIFFERENTS ELEMENTS DES JOUEURS

gamer1Area.appendChild(inputName1) // Affichage HTML de la inputField
gamer2Area.appendChild(inputName2)

gamer1Area.appendChild(selectSymbol1) // Affichage HTML de la selection des symboles.
gamer2Area.appendChild(selectSymbol2)

gamer1Area.appendChild(btnName1) // Affichage dans le HTML des btn "OK" pour chaque joueur
gamer2Area.appendChild(btnName2)

board.appendChild(btnBegin) // Affichage dans le HTML du btn BEGIN



btnName1.addEventListener("click", function(){ // Lorsque joueur 1 clique sur Ok

  player1.name = inputName1.value // Son nom est pris en compte 

  if (player2Ready == true && (selectSymbol1.value == player2.symbol)){ // Si le joueur 2 est ready (qu'il a pressé OK) et que le symbole de P1 == P2, alors une erreur s'affiche
    
      jeu.textContent = player1.name + " veuillez choisir un autre symbole"

    } else { // Si tout est ok, son nom est affiché à la place du bouton et de la selectField des symboles. Son symbole est aussi affiché.
      name1.textContent = inputName1.value
      player1Ready = true;
      player1.symbol = selectSymbol1.value
      // btnName1.remove() // Pas besoin car au clic le contenu de la balise est remplacé par le nom du joueur.
      // inputName1.remove()
      showSymbolP1.textContent = "Symbole : " + player1.symbol
  }
 
})

btnName2.addEventListener("click", function(){ // Idem lorsque joueur 2 clique sur Ok
  
  player2.name = inputName2.value

  if (player1Ready == true && (player1.symbol == selectSymbol2.value) ){
    
      jeu.textContent = player2.name + " veuillez choisir un autre symbole"
      
    } else {
      name2.textContent = inputName2.value
      player2Ready = true;
      player2.symbol = selectSymbol2.value
      showSymbolP2.textContent = "Symbole : " + player2.symbol
      // btnName2.remove() // Pas besoin car au clic le contenu de la balise est remplacé par le nom du joueur.
      // inputName2.remove()
  }
})

// BOUTON PERMETTANT DE COMMENCER LA PARTIE
btnBegin.addEventListener("click", function(){

  if (player1Ready && player2Ready){ // Si player 1 et 2 sont en True, c'est que tout est ok au niveau des profils

    showSymbolP1.textContent = "Symbole : " + player1.symbol 
    showSymbolP2.textContent = "Symbole : " + player2.symbol
    addReloadBtn() // On affiche alors le btn qui permet de recommencer une game avec les joueurs actuels.
    newGame() // On lance la game.
    btnBegin.remove() // On retire le btn central qui était sur la grille de jeu.

  } else {
    jeu.textContent = "Joueurs, validez vos profils !"    // Sinon c'est que les profils sont pas ok.   
  }

})

// BOUTON QUI APPARAIT POUR RELANCER UNE PARTIE
function addReloadBtn(){

const reloadBtn = document.createElement("button") // Creation d'un btn dans le DOM

reloadBtn.textContent = " Relancer" // Avec son texte par défaut.

reloadBtn.classList.add("retry") // Et le lien avec sa classe CSS

const reloadArea = document.querySelector("#reload") // On récupère la balise parent qui contiendra le bouton enfant.

reloadArea.appendChild(reloadBtn) // Affichage HTML du btn dans son parent ReloadArea.

//Fonction associée pour relancer une game

reloadBtn.addEventListener("click", function(){ // Au clic on relance une Game tout simplement.

  reloadGame()

})

}

// ---------------------------------------------------------------
 
 // Appel automatique de la fct newGame pour afficher directement le morpion à l'ouverture de la page.

// FONCTIONS DE JEU

function newGame(){ // Création d'une nouvelle partie.

  name1.textContent = player1.name
  name2.textContent = player2.name

  if (player1.symbol == "O"){
    document.getElementById("gamer1").style.backgroundColor = "#bdfff8"; // clair
    competitor1.textContent = "A toi de jouer !"
    competitor2.textContent = ""
  } else {
    document.getElementById("gamer2").style.backgroundColor = "#bdfff8"; // clair
    competitor2.textContent = "A toi de jouer !"
    competitor1.textContent = ""
  }

  for(let i = 1; i<= 9; i++){ // Création de 9 box

    let newBox = box.cloneNode() // On clone la box initiale créée au dessus
    newBox.id = "box" + i // On nomme chaque ID de box pour pouvoir les réutiliser ensuite
    board.appendChild(newBox) // On la fait apparaitre en tant qu'enfant dans le parent "Board"

    // pour chaque box, on va créer un événement au clic.

    newBox.addEventListener("click", function(){

        if (!gameFinished && newBox.innerText == ""){ // Si le jeu n'est pas déclaré comme fini (si y'a pas de vainqueur), ET si le contenu de la box est VIDE alors le coup se déroule.
         
          newBox.textContent = player; // Insère dans la box HTML qui a été cliquée le symbole du joueur en cours.

          checkScore(player)

          if (!gameFinished){

            switchPlayer() // Vu qu'on a fait un checkScore, si la partie n'est pas finie on switch.

            count++; // Incrémentation du nbr de coups (9 max possible)
          } 

          }  // Si le jeu est fini, il ne se passe plus rien. Il est ainsi figé.
                
          // if (!gameFinished && count >= 5){ // Permettra de figer le vainqueur une fois le score atteint.
          //   checkScore(player) // Tant que le jeu n'est pas fini, on fait un checkscore à chaque coup. l'appelle à partir du coup numéro 5 pour économiser des ressources.  
          // }
                    
          if (count == 9 && !checkScore()){ // Si le nbr de coup est à 9 (soit le max) et que checkScore renvoie false, alors match nul.
        
            jeu.textContent = "MATCH NUL !" // Quand il y a 9 coups de joués et pas de vainqueur, affichage de match nul et on déclare la fin du jeu.
            
            competitor2.textContent = ""
            competitor1.textContent = ""

            document.getElementById("gamer1").style.backgroundColor = "#83c5be"; // foncé
            document.getElementById("gamer2").style.backgroundColor = "#83c5be"; // foncé
        
            gameFinished = true;        
          }    
    }) // Fin de l'écoute événementielle au clic
  }
}

// FONCTIONS DIVERSES 

function switchPlayer(){ // Fonction permettant de switcher de joueur et donc de symbole. La fonction est appelée à chaque clic dans le HTML.

  if (player == player1.symbol){ // Simple condition pour switcher de joueur.

    player = player2.symbol 

    if (!gameFinished) {

    document.getElementById("gamer1").style.backgroundColor = "#83c5be"; // foncé
    document.getElementById("gamer2").style.backgroundColor = "#bdfff8"; // clair

    competitor2.textContent = "A toi de jouer !"
    competitor1.textContent = ""
    }

  } else {
    
    player = player1.symbol

    if (!gameFinished){

    document.getElementById("gamer1").style.backgroundColor = "#bdfff8"; // clair
    document.getElementById("gamer2").style.backgroundColor = "#83c5be"; // foncé

    competitor1.textContent = "A toi de jouer !"
    competitor2.textContent = ""
    }
  }  
}

function checkScore(player){  // Check toutes les conditions possibles de victoire à chaque coup joué. 
  
  // Principe : on vérifie le contenu .innerText de chaque box. Si c'est un "O" ou un "X" Il faut que les 3 conditions soient réunies pour ressortir un True.

  let b1 = document.getElementById("box1")
  let b2 = document.getElementById("box2")
  let b3 = document.getElementById("box3")
  let b4 = document.getElementById("box4")
  let b5 = document.getElementById("box5")
  let b6 = document.getElementById("box6")
  let b7 = document.getElementById("box7")
  let b8 = document.getElementById("box8")
  let b9 = document.getElementById("box9")

  // Conditions score en Ligne

  

  let condition1 = (b1.innerText == player && b2.innerText == player && b3.innerText == player) // ressort true ou false.
  let condition2 = (b4.innerText == player && b5.innerText == player && b6.innerText == player) // player c'est en fin de compte le joueur en cours avant le switch de symbole vu que la fct de switch est appelée après la fct checkscore dans le HTML
  let condition3 = (b7.innerText == player && b8.innerText == player && b9.innerText == player)

  if (condition1){ b1.style.color = "#a7344e", b2.style.color = "#a7344e", b3.style.color = "#a7344e";} // Changement de couleur pour le symbole victorieux
  if (condition2){ b4.style.color = "#a7344e", b5.style.color = "#a7344e", b6.style.color = "#a7344e";}
  if (condition3){ b7.style.color = "#a7344e", b8.style.color = "#a7344e", b9.style.color = "#a7344e";}
 
  // Condition score en colonne
 
  let condition4 = (b1.innerText == player && b4.innerText == player && b7.innerText == player)
  let condition5 = (b2.innerText == player && b5.innerText == player && b8.innerText == player)
  let condition6 = (b3.innerText == player && b6.innerText == player && b9.innerText == player)

  if (condition4){ b1.style.color = "#a7344e", b4.style.color = "#a7344e", b7.style.color = "#a7344e";}
  if (condition5){ b2.style.color = "#a7344e", b5.style.color = "#a7344e", b8.style.color = "#a7344e";}
  if (condition6){ b3.style.color = "#a7344e", b6.style.color = "#a7344e", b9.style.color = "#a7344e";}
 
  // Conditions pour les Diagonales
 
  let condition7 = (b1.innerText == player && b5.innerText == player && b9.innerText == player) 
  let condition8 = (b3.innerText == player && b5.innerText == player && b7.innerText == player)

  if (condition7){ b1.style.color = "#a7344e", b5.style.color = "#a7344e", b9.style.color = "#a7344e";}
  if (condition8){ b3.style.color = "#a7344e", b6.style.color = "#a7344e", b7.style.color = "#a7344e";}
 
  if (condition1 || condition2 || condition3 || condition4 || condition5 || condition6 || condition7 || condition8){ // Que des OU. Une doit être True pour être vainqueur.

     if (player == player1.symbol){ // player c'est le player actuel qui a rempli 1 condition. Si c'est player1 alors on affiche le score. Sinon c'est que c'est l'autre qui a gagné.

      document.getElementById("gamer1").style.backgroundColor = "#bdfff8"; // clair
      document.getElementById("gamer2").style.backgroundColor = "#83c5be"; // foncé
      competitor1.textContent = "Gagné !"
      competitor2.textContent = ""
      scorePlayer1++
      showScore1.textContent = "Score : " + scorePlayer1      

    } else {
      
      document.getElementById("gamer1").style.backgroundColor = "#83c5be"; // foncé
      document.getElementById("gamer2").style.backgroundColor = "#bdfff8"; // clair
      competitor2.textContent = "Gagné !"
      competitor1.textContent = ""
      scorePlayer2++
      showScore2.textContent = "Score : " + scorePlayer2
      
    }
    
    gameFinished = true; // La game passe en True pour figer uniquement le vainqueur. Checkscore ne sera plus appelée. 

    jeu.textContent = "PARTIE TERMINEE !"

  }
}

function reloadGame(){  // Fonction qui delete les box Actuelles et qui en génère de nouvelles.

  jeu.textContent = "C'EST PARTI"
    
  for(let i = 1; i<= 9; i++){ // Boucle qui delete les box

    boxToDelete = "box"+i

    document.getElementById(boxToDelete).remove()
  }

  newGame() // Recréation des box.
  gameFinished = false; // Réinitialisation de la game.
  count = 0; // Réinitialisation du compteur de coups

  switchPlayer() // Sans oublier de switch pour que ce soit l'autre joueur qui commence le jeu. 
}