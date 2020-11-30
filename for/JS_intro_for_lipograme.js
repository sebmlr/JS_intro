var lettre;
var text = prompt("Saisir un texte")
var lettreChoisi = prompt("Lettre choisi");
var n = text.length;
var lipogramme=true;
var nb = 0;

for (var i = 0 ; i<n; i++)
{
    lettre = text.charAt(i)
    if (lettre == lettreChoisi)
    {
        lipogramme = false;
        nb = nb+1;
    }
}

if (lipogramme == false)
{
    document.write("Texte non lipogrammas" + "<br />");
}
else
{
    document.write("Texte lipogrammas" + "<br />");
}

document.write("Il y a " + nb + " nombre de " + lettreChoisi);