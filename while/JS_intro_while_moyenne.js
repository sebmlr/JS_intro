// mise en oeuvre de la boucle while
// le but est ici de calculer la moyenne des notes saisies
// la saisie se termine lorsque l'utilisateur saisi la note -1
/*Constantes*/
const FINSAISIE = -1 // code d'accès attendu
/*variables*/
var noteSaisie=0.0; // note saisie par l'utilisateur
var nbNotes = 0; // nombre de notes saisies, il est incrémenté à chaque saisie sauf pour -1
var sommeDeNotes=0.0; // somme des notes saisies
// boucle while dans laquelle on invite l'utilisateur à saisir ses notes
// la saisie se poursuit tant que l'utilisateur n'a pas saisi -1
while((noteSaisie!=FINSAISIE))
{


    noteSaisie=parseFloat(prompt("Entrez votre note ici"));
    if(noteSaisie!=FINSAISIE)
    {
        sommeDeNotes+=noteSaisie; //incrémente
        nbNotes++;
    }
    else{
        document.write("La saisie des notes est terminée!" + "<br/>");

    }
}


document.write("La moyenne des "+ nbNotes+" notes saisies est de : "+(sommeDeNotes/nbNotes) + "<br/>");





/* Les variables
var nbSaisi = 0;   // nombre saisis un à un
var compteur = 0;  // compte le nombre de nombres saisis
var sommeNb = 0; 

//On sort de la boucle quand l'utilisateur saisi
while (nbSaisi != -1)
{
    nbSaisi = parseFloat(prompt ("Saisissez un nombre, écrire -1 pour le dernier nombre"));
    if (nbSaisi != -1)
    {
        compteur++;
        document.write("Nombre "+compteur+" : "+nbSaisi+"<br />");
        sommeNb = nbSaisi+sommeNb;
    }
}

document.write("Moyenne des nombres saisis : "+ (sommeNb/(compteur)).toFixed(2)+"<br />");
*/