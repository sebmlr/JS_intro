/* declaration et initialisation d'une variable*/
var longueur = 0;
var largeur = 0;
var hauteur = 0;
var surface = 0;
var pouvoirCouvrant = 0;
var nbCouches = 0;
var quantite = 0;
var piece;

document.write(parseFloat(prompt()))

document.write("********************************************************************" + "<br/>");
document.write("           Ce programme calcule la quantité de peinture             " + "<br/>");
document.write("                pour peindre une pièce d'habitation                 " + "<br/>");
document.write("********************************************************************" + "<br/>");


/* saisie des parametres */
piece = prompt("Precisez le type de piece (Salon, Séjour etc.) : ");
longueur = parseFloat(prompt("Saisissez la longueur de la pièce : "));
largeur = parseFloat(prompt("Saisissez la largeur de la pièce : "));
hauteur = parseFloat(prompt("Saisissez la hauteur de la pièce : "));
/* calcul de la surface */
surface = (longueur + largeur) * 2 * hauteur;

pouvoirCouvrant = parseFloat(prompt("Saisissez le pouvoir courant de la peinture : "));
nbCouches = parseInt(prompt("Saisissez le nombre de couches à appliquer: "));

quantite = (surface / pouvoirCouvrant) * nbCouches;

document.write("*******************************************" + "<br/>");
document.write("          Rappel de vos valeurs            " + "<br/>");
document.write("*******************************************" + "<br/>");


document.write("la piece à peindre est votre " + piece + "<br/>");
document.write("Longueur = " + longueur + " metres" + "<br/>");
document.write("Largeur = " + largeur + " metres" + "<br/>");
document.write("Pouvoir couvrant de la peinture = " + pouvoirCouvrant + " metres carrés au litre" + "<br/>");
document.write("Nombre de couches à appliquer : " + nbCouches + "<br/>");
document.write("********************************************************************" + "<br/>");

document.write("La surface des murs de votre " + piece + " est de " + surface + " metres carrés " + "<br/>");
document.write("La quantité de peinture nécessaire est de " + quantite + " litres " + "<br/>");