/* declaration et initialisation d'une constante*/
const TAUXREMUCOMPTE = (0.75 / 100);
const CAPITALDEPART = 1000;
const DUREEPLACEMENT = 20;
/* declaration et initialisation d'une variable*/
var capital = CAPITALDEPART;
var iterateur = 0;

for (iterateur = 1; iterateur <= DUREEPLACEMENT; iterateur++) {
    capital = capital * (1 + TAUXREMUCOMPTE);
    capital = (capital * 100); // Pour arrondir le résultat
    capital = Math.round(capital); // c'est une autre méthode que le
    capital /= 100; // capital.toFixed(2)
    document.write("Le capital au bout de " + iterateur + " an(s) s\'élève à : " + capital + "<br\>");
}