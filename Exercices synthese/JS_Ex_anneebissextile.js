var annee= 0;
var estBissextile=false;


annee = parseInt(prompt("Saisissez une année !"));
if((annee%4)==0)
{
        if((annee%100==0)&& (annee%400!=0))
        {
            estBissextile=false;
        }
        else
        {
            estBissextile=true;
        }

}

if(estBissextile==false)
    document.write("L'année "+annee+" n'est pas bissextile !"+ "<br />");
else
    document.write("L'année "+annee+" est bissextile !"+ "<br />");


    /* 2e solution
var annee=0;

annee=prompt("Veuillez entrer une année");

if((annee % 4 == 0)&&(annee % 100 != 0)||(annee % 400 == 0))
{
    document.write("L'année "+annee+" est bisextile.")
}
else
{
    document.write("L'année "+annee+" n'est pas bisextile.")
}
*/