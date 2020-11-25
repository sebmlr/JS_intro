const km = 1.609

var miles = Number(prompt("Saiisir la distance en miles : "))
var valeurs = Number(prompt("Combien de valeur à afficher ? : "))

var conv = 0
var stock_miles = miles

document.write( "Miles____KM <br>")

for(var index = 0; index < valeurs; index++){

    conv = miles * km
    document.write(  miles +" ------> " + conv.toFixed(0) + "<br>")
    miles = miles + stock_miles
}

/*2e solution
var km = 0;
var milesInit = 0;
var index = 0;
var miles = 0;
var nbLignes = 0;

milesInit = parseInt(prompt("Entrez la distance initiale en miles supérieure à 0"));
nbLignes = parseInt(prompt("Entrez le nombre de lignes souhaité"));
if (milesInit >= 0) {
    document.write("Miles" + "&nbsp" + "&nbsp" + "&nbsp" + "kms" + "<br/>");
    miles = milesInit;
    for (index = 1; index <= nbLignes; index++) {
        +"&nbsp"
        km = miles * 1.609;
        //document.write("&nbsp" + miles + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + km.toFixed(0) + "&nbsp" + "<br/>");
        document.write("&nbsp" + miles + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + km.toFixed(0) + "&nbsp" + "<br/>");
        miles += 5;
    }
} else {
    document.write("On a dit un nombre >0 !");
}

 */