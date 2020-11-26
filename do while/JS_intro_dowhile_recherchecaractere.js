// mise en oeuvre de la boucle do while
// le but est ici de rechercher un caractere dans un chaine
// le programme indique si le caractere est présent
// ansi que le nombre d'iteration nécessaires pour le trouver

/*variables*/
var caracRecherche; // caractere recherché par l'utilisateur
var chaineSaisie; // message saisi par l'utilisateur
var nbIterations=0; // nombre d'itérations nécessaires
var trouve=false; // bolléen qui indique la présence du caractere recherché dans la chaine
var nbCarac = 0 ;// longueur du message saisi
var reponse ;// pour continuer ou non
do
{
    nbIterations =0;
    trouve=false;
    chaineSaisie=prompt("Entrez votre message ici");
    caracRecherche=prompt("Quel caractere recherchez vous ?");
    nbCarac = chaineSaisie.length;
    document.write("longueur du message "+ chaineSaisie + " est de " + nbCarac + "<br/>");
    do{
        document.write("iteration n° ", + nbIterations+ "<br/>");
        if(caracRecherche==chaineSaisie.charAt(nbIterations))
            trouve=true;
        else
            nbIterations++;


    }while((nbIterations<=nbCarac)&&(trouve!=true));

    if (trouve == true)
    {
        document.write(" Le caractere recherché est présent dans le message ! " + "<br/>");
        document.write((nbIterations+1) + " itérations ont été nécessaires" + "<br/>");
    }
    else
        document.write("Le caractere " + caracRecherche +" n'a pas été trouvé malgré "+ (nbIterations+1) + " itérations " + "<br/>");
    reponse=prompt("Voulez vous effectuer une nouvelle recherche (o/n) ?");

}while(reponse!='n');
