const MAX=100;
var nombre=0;
var increment=10;

while(nombre<=MAX)
{
    document.write("Le nombre vaut : "+nombre+"<br/>");
    document.write("Il reste : "+(MAX-nombre)/increment+" itération <br/>");
    nombre+=increment;
}