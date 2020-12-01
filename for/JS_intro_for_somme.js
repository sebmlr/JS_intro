var nombre=0;
var somme=0;
var index=0;

// on demande à l'utilisateur de saisir un entier
nombre=parseInt(prompt("Entrez un nombre d'entiers : "));

if(nombre>=1)
{
    for(index=1;index<=nombre;index++)
    {
        if(index<nombre)
        {
            document.write(index+" + ");
        }
        else
        {
            document.write(index);
        }
        somme+=index;
    }
    // ici le calcul est terminé, on peut afficher les résultats
    document.write(" = "+somme);
}
else
    document.write("On dit un nombre >= 1 !");
