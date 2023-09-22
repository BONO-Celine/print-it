const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



// Déclaration des variables 
let sliderDiv = document.getElementById("banner")
let bannerImg = document.querySelector(".banner-img")
let currentSlideIndex = 0

/*-------------------------------------------------------------------*/
/* Rendre interactive la flèche gauche */
let arrowLeft = document.getElementById("arrowLeft")
arrowLeft.addEventListener("click", () => {

/* Affichage de l'image précédente et défilement infini */
	if (slides[currentSlideIndex - 1]) {
		currentSlideIndex-=1
	} else {
		currentSlideIndex = slides.length - 1
	}
	bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`

/*Lancement de la fonction pour remplacer le texte "tagLine" afin qu'il corresponde à l'image du carrousel active */
 replaceTagLine ()

/* Lancement de la fonction pour afficher le Bullet point actif  */
showActiveDot()
})
/*-------------------------------------------------------------------*/
/*-------------------------------------------------------------------*/
/* Rendre interactive la fleche droite */
let arrowRight = document.getElementById("arrowRight")
arrowRight.addEventListener("click", () => {

/* Affichage de l'image suivante et défilement infini */
	if (slides[currentSlideIndex + 1]) {
		currentSlideIndex+=1
	} else {
		currentSlideIndex = 0
	}
	bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`

/* Lancement de la fonction pour remplacer le texte "tagLine" afin qu'il corresponde à l'image du carrousel active */
replaceTagLine ()

/* Lancement de la fonction pour afficher le Bullet point actif  */
showActiveDot()
})
/*-------------------------------------------------------------------*/

/*---------------Afficher les bullet points--------------------------*/

for (let i = 0; i < slides.length; i++) {
// Création d'une balise span avec createElement
	let span = document.createElement("span")
// Ajout de la class dot et d'un id à cette balise 
	span.setAttribute("class","dot")
	span.setAttribute("id","dot"+ i)
// Récupération de l'élément parent existant grâce à son ID afin de lui ajouter l'élément enfant span créé
	document.getElementById("dots").appendChild(span)
}

// Afficher le 1er bullet point actif
document.getElementById("dot0").classList.add("dot_selected")
/*-------------------------------------------------------------------*/

/*--------------------------FONCTIONS--------------------------------*/
function replaceTagLine () {
/* -- Accés au paragraphe de la div "banner" et remplacement de son contenu avec le texte du slide correspondant -- */	
 sliderDiv.querySelector('p').innerHTML = slides[currentSlideIndex].tagLine
}

function showActiveDot() {
/*-- Recupération de la liste de tous les éléments du document dont la classe est ".dot"  et suppression de la classe "dot_selected" pour chacun de ces éléments--*/
document.querySelectorAll('.dot').forEach(element => {element.classList.remove("dot_selected")})
/* Ajout  de la classe "dot_selected" au bullet point correspondant à la diapositive en cours de visionnage  */
document.getElementById("dot" + currentSlideIndex).classList.add("dot_selected")
}
/*-------------------------------------------------------------------*/

