/* declaration et initialisation d'une variable*/

var temp = 0;

/* saisie des parametres */
temp = parseFloat(prompt("saisir temperature : "));

/* debut de test */
if (temp<-50)
{
    document.write("valeur de température trop petite");
}
else
{
    if(temp>50)
    {
        document.write("valeur de température trop grande");
    }
    else
    {
        document.write(temp + "°c nous donnes " + ((temp*9/5)+32) + "°F")
    }
}