var choix=0;

document.write(" 1. Codage d'un message" + "<br/>");
document.write(" 2. Décodage d'un message" + "<br/>");
document.write(" 3. Quitter" + "<br/>");

choix= parseInt(prompt("Quelle action souhaitez vous réaliser ? "));

switch(choix)
{
    case 1:
        document.write("Codage d'un message");
    break;
    case 2:
        document.write("Décodage d'un message");
    break;
    case 3:
        document.write("Quitter");
    break;
}