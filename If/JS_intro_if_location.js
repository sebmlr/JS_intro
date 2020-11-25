const tarifEssJour=34;
const tarifEssKm=0.15;
const tarifDieJour=40;
const tarifDieKm=10;

var distance=0;
var essence=0;
var diesel=0;
var durée=0;

durée=parseInt(prompt("Saisir le nombre de jours de location : "));
distance=parseInt(prompt("Saisir le nombre de kilomètres que vous allez faire : "));

essence=(tarifEssJour*durée)+(tarifEssKm*distance);
diesel=(tarifDieJour*durée)+(tarifDieKm*distance);

if (essence<diesel)
{
    document.write("Le plus rentable est l'essence pour un coût de " + essence);
}
else
{
    document.write("Le plus rentable est le diesel pour un coût de " + diesel +" euros");
}

if (essence===diesel)
{
    document.write("Le tarif est le même pour les 2 motorisations");
}