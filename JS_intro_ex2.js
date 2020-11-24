/*declaration et initialisation d'une variable*/
var nb1 = 0;
var nb2 = 0;
var nb3 = 0;

var moyenne = 0;

/*saisie nb*/
nb1 = parseInt(prompt("Saisissez le nb1"));
nb2 = parseInt(prompt("Saisissez le nb2"));
nb3 = parseInt(prompt("Saisissez le nb3"));

/*Calcul*/
moyenne = (nb1+nb2+nb3)/3

/*affichage du résultat dans la page web*/
document.write("La moyenne des 3 nombres est " + moyenne);