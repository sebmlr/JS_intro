/* declaration et initialisation d'une variable pour le salaire brut*/
var taille = 0;
var poids = 0;
var genre = 0; /* false -> homme, true -> femme */
var IMC = 0;
var poidsLorentz = 0;
var poidsDevine = 0;
var poidsIdeal; // la moyenne de poidsLorentz et de poidsDevine
var reponse = 'n'; // utilisée pour la répétition du programme
do {
    document.write("<BR/>");
    /*saisie des elements physiologiques*/
    taille = parseInt(prompt("Saissez votre taille en m : ")); // on recupère une valeur entière
    poids = parseFloat(prompt("Saissez votre poids en kg : ")); // on récupère le poids sous formee réelle
    genre = parseInt(prompt("Précisez votre genre ( 0 : homme, 1: femme) : "));

    /* calcul de l'IMC*/
    //IMC = (poids / ((taille / 100) * (taille / 100)));
    IMC = (poids / Math.pow((taille / 100), 2));
    /* estimation du poids selon les formules de LORENTZ et DEVINE */

    if (genre == 0) { // calcul du poids idéal pour un homme
        poidsLorentz = (taille - 100) - ((taille - 150) / 4);
        poidsDevine = 50 + (2.3 * ((taille - 152.4) / 2.54));
        poidsIdeal = (poidsLorentz + poidsDevine) / 2;
    }

    if (genre == 1) { // calcul du poids idéal pour une femme
        poidsLorentz = (taille - 100) - ((taille - 150) / 2.5);
        poidsDevine = 45.5 + (2.3 * ((taille - 152.4) / 2.54));
        poidsIdeal = (poidsLorentz + poidsDevine) / 2;
    }

    document.write("Votre taille est de : " + taille + " cm" + "<br/>");
    document.write("Votre poids est de : " + poids + " kg" + "<br/>");
    if (genre == 0) {
        document.write("Vous etes un homme" + "<br/>");

    } else {
        document.write("Vous etes une femme" + "<br/>");
    }
    document.write("Votre poids idéal est de : " + poidsIdeal.toFixed(2) + " kg" + "<br/>");
    document.write("Votre pIMC calculé est de : " + IMC.toFixed(2) + "<br/>");

    /* affichage de la categorie */

    if (IMC < 16.5) {
        document.write("Vous êtes en situation de maigreur sevère " + "<br/>");
    }
    if ((IMC >= 16.5) && (IMC < 18.99)) {
        document.write("Vous êtes en situation de maigreur" + "<br/>");
    }
    if ((IMC >= 18.99) && (IMC < 24.99)) {
        document.write("Vous êtes en situation normale" + "<br/>");
    }
    if ((IMC >= 24.99) && (IMC < 29.99)) {
        document.write("Vous êtes en situation de surcharge pondérale" + "<br/>");
    }
    if ((IMC >= 29.99) && (IMC < 34.99)) {
        document.write("Vous êtes en situation d'obésité" + "<br/>");
    }
    if ((IMC >= 34.99) && (IMC < 39.99)) {
        document.write("Vous êtes en situation d'obésité sévère" + "<br/>");
    }
    if ((IMC >= 40)) {
        document.write("Vous êtes en situation d'obésité morbide" + "<br/>");
    }

    reponse = prompt("voulez vous recommencer (o/n)?");

} while (reponse != 'n');