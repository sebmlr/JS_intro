// Jeu du devin
// le but du jeu est de deviner le nombre choisi par le programme
// Le nombre d'essais est limité à 10
// Le nombre est compris entre 1 et 500

// constantes

const MIN = 1;
const MAX = 500;
const MAXTENTATIVES = 10;

const PROPTROPGRANDE = "Votre proposition est trop grande !";
const PROPTROPPETITE = "Votre proposition est trop petite !";
const BRAVO = " Félicitations vous aves trouvé le nombre mystère !";

var propositionJoueur = 0;
var nbTentatives = 0;
var nbMystere = 0;
var trouve = false;
var reponse ='n';

//debut du programme
do{
	trouve=false;
	nbTentatives=0;
//génération du nombre mystere

nbMystere= Math.floor((Math.random() * MAX)+ MIN);
document.write("le nombre mystere est :"+nbMystere+"<br/>");
do{
	propositionJoueur=parseInt(prompt("Entrez votre proposition : "));
	if(propositionJoueur==nbMystere)
	{
		trouve=true;
		document.write(BRAVO+"<br/>");
	}
	else{
		if(propositionJoueur<nbMystere)
		{
			document.write(PROPTROPPETITE+"<br/>");
			nbTentatives++;
		}
		else
		{
			document.write(PROPTROPGRANDE+"<br/>");
			nbTentatives++;
		}
		
	}
	
	
}while((trouve!=true) && (nbTentatives<MAXTENTATIVES));

if(trouve == true)
		document.write("Vous avez trouvé le nombre mystere en " + (nbTentatives+1)+"tentatives <br/>");
else
	document.write("Dommage le nombre mystere était " + nbMystere +"<br/>");

reponse=prompt("Voulez vous faire une autre partie ? (o/n)");
	
}while(reponse !='n');
