// Code de cesar

var cle = "";
var sens;
var saisie;
var excle = "";
var choixMenu;
var messageClair = "";
var carac;
var messageCode = "";
var inter = "";
var continuer = true;

// saisie de la clé, on autorise un offset de 26
// on saisie également le sens de la clé, tant que la saisie n'est pas correcte
// on remande à l'utilisateur de faire une nouvelle saisie


do {
    //Affichage dumenu
    document.write(" 1. codage d'un message <BR/>");
    document.write(" 2. décodage d'un message <BR/>");
    document.write("3. quitter <BR/>");
    // saisie du choix utilisateur
    choixMenu = prompt("Saisissez votre choix : ");

    //traitement du choix de l'utilisateur
    switch (choixMenu) {

        case "1":
            messageClair = prompt(" Saisssez votre message en clair :");
            do {
                excle = ""; // chaine pour extraire la clé
                //l'utilisateur saisit un offset et un sen ex : 1+ , 2-, 5+, 25+, 26-.....
                saisie = prompt("entrez votre clé : valeur et sens :");
                // La difficulté sera de dissocier l'offset du sens
                var longueurCle = saisie.length; // on recupère la longueur de la Clé
                //Le sens de codage se trouve en dernière position
                sens = saisie[longueurCle - 1]; // on recupère le dernier élément de la Clé donc le sens
                for (var i = 0; i < longueurCle - 1; i++) {

                    excle += saisie.charAt(i); // on récupère tous les éléments de la clé sauf le dernier
                }
                cle = parseInt(excle); // on convertit la clé en entier

            }
            while (cle > 26);
            // Codage du message

            for (var index = 0; index < messageClair.length; index++) {

                if (sens == '-') {
                    // on converti en string (le code ascii du caractere pointe dans le messageClair auquel on soustrait la clé
                    // puis on concetne dans le message codé
                    messageCode += String.fromCharCode((messageClair.charCodeAt(index) - cle));

                }
                if (sens == '+') {
                    messageCode += String.fromCharCode((messageClair.charCodeAt(index) + cle));
                }

            }

            // Affichage du message codé
            document.write("Le message codé : " + messageCode + "<BR/>");

            break;

        case "2":
            messageCode = prompt(" Entrez le message codé : ");
            do {
                excle = ""; // chaine pour extraire la clé
                saisie = prompt("entrez votre clé : valeur et sens :");
                var longueurCle = saisie.length;
                sens = saisie[longueurCle - 1];
                for (var i = 0; i < longueurCle - 1; i++) {

                    excle += saisie.charAt(i);
                }
                cle = parseInt(excle);

            }
            while (cle > 26);

            for (var index = 0; index < messageCode.length; index++) {

                if (sens == '-') {
                    // on converti en string (le code ascii du caractere pointe dans le messageClair auquel on soustrait la clé
                    // puis on concatene dans le message codé
                    messageClair += String.fromCharCode((messageCode.charCodeAt(index) + cle));

                }
                if (sens == '+') {
                    messageClair += String.fromCharCode((messageCode.charCodeAt(index) - cle));
                }

            }

            // Affichage du message décodé
            document.write("Le message décodé : " + messageClair + "<BR/>");

            break;
        case "3":
            continuer = false;
            break;

    }

} while (continuer != false);