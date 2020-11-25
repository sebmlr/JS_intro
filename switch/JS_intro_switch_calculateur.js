/* declaration des variables */
/* Recuperation des choix de l'utilisateur */
var typeOperation = 0;
var typeOperationStd = 0;
var typeOperationSci = 0;
/* nombres utilisés dans les calculs */
var nb1 = 0;
var nb2 = 0;


/* Affichage du menu */
document.write(" 1. Calcul Standards" + "<br/>");
document.write(" 2. Calculs Scientifiques" + "<br/>");
document.write(" 3. Quitter" + "<br/>");

typeOperation = parseInt(prompt("Quelle opération souhaitez vous réaliser ? "));
document.write("<br/>");

/*traitement du choix*/
switch (typeOperation) {
    case 1:
        document.write(" 1. Addition" + "<br/>");
        document.write(" 2. Soustraction" + "<br/>");
        document.write(" 3. Multiplication" + "<br/>");
        document.write(" 4. Division" + "<br/>");
        typeOperationStd = parseInt(prompt("Quelle opération souhaitez vous réaliser ? "));
        document.write("<br/>");
        //*****ICI le sous menu pour les calculs standards */
        switch (typeOperationStd) {
            case 1:
                nb1 = parseInt(prompt("Saisissez le 1er nombre"));
                nb2 = parseInt(prompt("Saisissez le 2e nombre"));
                document.write("Le résultat est "+(nb1+nb2));
                break;
            case 2:
                nb1 = parseInt(prompt("Saisissez le 1er nombre"));
                nb2 = parseInt(prompt("Saisissez le 2e nombre"));
                document.write("Le résultat est "+(nb1-nb2));
                break;
            case 3:
                nb1 = parseInt(prompt("Saisissez le 1er nombre"));
                nb2 = parseInt(prompt("Saisissez le 2e nombre"));
                document.write("Le résultat est "+(nb1*nb2));
                break;
            case 4:
                nb1 = parseInt(prompt("Saisissez le 1er nombre"));
                nb2 = parseInt(prompt("Saisissez le 2e nombre"));
                document.write("Le résultat est "+(nb1/nb2));
                break;
        }
        break;
    case 2:
        document.write(" 1. x² " + "<br/>");
        document.write(" 2. 1/x" + "<br/>");
        document.write(" 3. log (x)" + "<br/>");
        document.write(" 4. |x| " + "<br/>");
        typeOperationSci = parseInt(prompt("Quelle opération souhaitez vous réaliser ? "));
        document.write("<br/>");
        //*****ICI le sous menu pour les calculs scientifiques */
        switch (typeOperationSci) {
            case 1:
                nb1 = parseInt(prompt("Saisissez un nombre"));
                document.write("Le résultat est "+(nb1*nb1));
                break;
            case 2:
                nb1 = parseInt(prompt("Saisissez un nombre"));
                document.write("Le résultat est "+(1/nb1));
                break;
            case 3:
                nb1 = parseInt(prompt("Saisissez un nombre"));
                document.write("Le résultat est "+Math.log10(nb1));
                break;
            case 4:
                nb1 = parseInt(prompt("Saisissez un nombre"));
                if (nb1>=0)
                    document.write("Le résultat est "+(nb1));
                else
                    document.write("Le résultat est "+Math.abs(nb1));
                break;
        }
        break;
    case 3:
        document.write(" Vous avez choisi de terminer ce programme" + "<br/>");
        break;
    default:
        document.write(" Choix inconnu" + "<br/>");
}