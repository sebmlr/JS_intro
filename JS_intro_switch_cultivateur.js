const QUANTITEBLE = 12;
const QUANTITEMAIS = 15;
const QUANTITEORGE = 8;
const QUANTITESEIGLE = 7;
const PRIXBLEAUKG = 2.72;
const PRIXMAIS = 2.89;
const PRIXORGEAUKG = 1.89;
const PRIXSEIGLEAUKG = 2.8;

var surface=0;
var cereal=0;
var cout=0;
var semence=0;

surface=prompt("Saisir la surface du champ");
cereal=prompt("Choisir le type de céréales : 1.Blé tendre 2.Maïs 3.Orge 4.Seigle");

switch (cereal) {
    case"1":
        document.write("Vous avez choisi du Blé tendre"+"<br/>");
        document.write("Pour un champ de "+surface+"<br/>");
        document.write("Il vous faut "+(semence=(surface/QUANTITEBLE))+" KG de semence"+"<br/>");
        document.write("Le prix de revient est de : "+(cout=(PRIXBLEAUKG*semence))+" Euros"+"<br/>");
        break;
    case"2":
        document.write("Vous avez choisi du Blé tendre"+"<br/>");
        document.write("Pour un champ de "+surface+"<br/>");
        document.write("Il vous faut "+(semence=(surface/QUANTITEMAIS))+" KG de semence"+"<br/>");
        document.write("Le prix de revient est de : "+(cout=(PRIXMAIS*semence))+" Euros")+"<br/>";
        break;
    case"3":
        document.write("Vous avez choisi du Blé tendre"+"<br/>");
        document.write("Pour un champ de "+surface+"<br/>");
        document.write("Il vous faut "+(semence=(surface/QUANTITEORGE))+" KG de semence"+"<br/>");
        document.write("Le prix de revient est de : "+(cout=(PRIXORGEAUKG*semence))+" Euros"+"<br/>");
        break;
    case"4":
        document.write("Vous avez choisi du Blé tendre"+"<br/>");
        document.write("Pour un champ de "+surface+"<br/>");
        document.write("Il vous faut "+(semence=(surface/QUANTITESEIGLE))+" KG de semence"+"<br/>");
        document.write("Le prix de revient est de : "+(cout=(PRIXSEIGLEAUKG*semence))+" Euros"+"<br/>");
    default:
        document.write("Votre choix n'existe pas");
}