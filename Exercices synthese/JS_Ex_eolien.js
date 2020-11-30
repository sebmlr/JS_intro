var vent = 5

document.write("---------");
for (var temp = 9; temp >= 0; temp--) {

    document.write("&nbsp" + temp + "°C" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp"+ "&nbsp");

}
document.write("<BR/>");


for(vent; vent <= 110; vent+=5)
{
    document.write("<br />" + vent + "km/h___ ")
    for(var temp=-6; temp <=10; temp+=2)
    {
        //Calcul de la temprature
        var stock = 13.12 + (0.6215 * temp) + (0.3965 * temp - 11.37) * Math.pow(vent, 0.16)
        //toFixed permet de déterminer le nombre de chiffres aprés la virgule
        document.write(stock.toFixed(1) + "&nbsp" + "&nbsp"+ "&nbsp"+ "&nbsp"+ "&nbsp"+ "&nbsp"+ "&nbsp"+ "&nbsp")
    }

}