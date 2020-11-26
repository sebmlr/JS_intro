// mise en oeuvre de la boucle while
// le but est ici de siasir un code d'accès
// l'utilisateur dispose de trois tentatives
/*Constantes*/
const CODE = 55129 // code d'accès attendu
/*variables*/
var codeSaisi=0; // code saisi par l'utilisateur
var nbTentative = 0; // nombre de tentative, il est incrémenté à chaque essai
var codeValide=false; // booléen qui indique si le code saisi est valide ou non
// boucle while dans laquelle on invite l'utilisateur à saisir son code
// tant qu'il n'a pas saisi le code correct et qu'il n'a pas atteint le nombre de tentatives autorisées
// si une des conditions n'est plus vraie, la boucle se termine
while((codeValide!=true)&&(nbTentative<3))
{


    codeSaisi=prompt("Entrez votre code ici");
    if(codeSaisi==CODE)
        codeValide=true;
    else{
        document.write("Code erroné !" + "<br/>");
        nbTentative++;
    }
}
// Selon que le code saisi soit correct ou pas on affiche le message adéquat
if(codeValide==true)
    document.write("Code accepté !" + "<br/>");
else
    document.write("Code erroné !, vous avez atteint le nombre de tentatives autorisées" + "<br/>");

____________________________________________________________________________________________________________

/*on décrémente le nombre de tentatives max
const mdp = 55129;

var compte = 3;
var saisie = "";

while(saisie != mdp && compte != 0)
{
    saisie = Number(prompt("Saisir le mot de passe " + compte + " Tentatives : "))
    compte--; //décrémente de 1
}

if(saisie == mdp){
    document.write("Bienvenue")
}else if(compte == 0)
{
    document.write("Plus de tentative")
}else
{
    console.error("ERROR code while pas ok")
}
*/