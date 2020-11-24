const ble =12;
const mais =15;
const orge =8;
const seigle =7;

const prixBle =2.72;
const prixMais =2.89;
const prixOrge =1.89;
const prixSeigle =2.8;

var choix = prompt("Choix semence (1.blé/2.mais/3.orge/4.seigle)");
var metre = parseInt(prompt("cb de m² ? "));
var kg;
var prixTotal;


switch (choix) {
    case "1":
        document.write("Vous avez choisi blé" + "<br />")
        kg = (ble*metre)/1000
        prixTotal = prixBle*kg
        break;
    case "2":
        document.write("Vous avez choisi maïs" + "<br />")
        kg = (mais*metre)/1000
        prixTotal = prixMais*kg
        break;
    case "3":
        document.write("Vous avez choisi Orge" + "<br />")
        kg = (orge*metre)/1000
        prixTotal = prixOrge*kg
        break;
    case "4":
        document.write("Vous avez choisi Seigle" + "<br />")
        kg = (seigle*metre)/1000
        prixTotal = prixSeigle*kg
        break;
    default:
        document.write("Erreur saisi")
}

document.write("Pour un champ de " + metre + " m²" + "<br />")
document.write("Il vous faut " + kg + " kg de semence" + "<br />")
document.write("Le prix de revient est de : " + prixTotal.toFixed(2) + "€" + "<br />")