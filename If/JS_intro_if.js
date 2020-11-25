/* declaration et initialisation d'une variable*/
var nimbore1=0;
var nombre2=0;

/* saisie des parametres */
nombre1=parseInt(prompt("saisir nb1 : "));
nombre2=parseInt(prompt("saisir nb2 : "));

/* debut de test */
if (nombre1>nombre2)
{
    document.write(nombre1+" est plus grand que "+nombre2);
}
else
{
    if(nombre1<nombre2)
    {
        document.write(nombre1+" est plus petit que "+nombre2);
    }
}