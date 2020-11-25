/*
Un palindrome est un texte identique lorsqu’il est lu de gauche à droite et de droite à gauche.
Ainsi, le mot radar est un palindrome. Normalement, il n’est pas tenu compte des accents, trémas, cédilles ou des espaces.
Écrire un programme qui demande à l’utilisateur de saisir un mot et qui affiche si celui-ci est un palindrome.
 */

var saisie = String(prompt(" Entrez une chaine : "))
var stock = "";

for(var i = 0 ; i < Number(saisie.length) ; i++ ){
    stock = stock + saisie.charAt(Number(saisie.length) - 1 - i)
}

if( saisie == stock){
    document.write("Palindrome")
}else {
    document.write("Pas Palindrome")
}

/*2e solution
var message;
var estUnPalindrome = true;
var longueurMessage = 0;

message = (prompt("Entrez votre texte ici"));

longueurMessage = message.length

for (index = 0; index < longueurMessage; index++) {
    if (message.charAt(index) != message.charAt(longueurMessage - 1 - index)) {
        estUnPalindrome = false;
    }
}
if (estUnPalindrome == true) {
    document.write("Votre message est un palindrome");
} else {

    document.write("Votre message n\'est pas un palindrome");
}

 */