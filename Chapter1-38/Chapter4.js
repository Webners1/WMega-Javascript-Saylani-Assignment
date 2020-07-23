/*                         Chapter 4                    */
var legal = "name" ;
var legal1 = "$name";
var legal2 = "_name";
var legal3 = "_Name";
var legal4 = "$NAme";
var ilegal = "name";
var ilegal1 = "1$name";
var ilegal2 = "2_name";
var ilegal3 = "%Name";
var ilegal4 = "*1NAme";
var js = "JS keywords";








document.write("<h1>Rules for naming JS variables</h1>");
document.write("<br>");
document.write("<h4>Variable names can only contain numbers,"+ ", " +legal2 + "  " +" ," + legal3 +" " + ", " + legal4 + " ," + " " + legal + " " + legal1 +" " + ",and . For example $my_1stVariable</h4>");
document.write("<h4>Variable must begin with a letter," + ", " + ilegal2 + "  " + " ," + ilegal3 + " " + ", " + ilegal4 + " ," + " " + ilegal + " " + ilegal1 + " " + ",and . For example $my_1stVariable</h4>");

document.write("<h4>Variable names are case " +' ' + "sensitive" + "</h4>");

document.write("<h4> Variable names should not be " + ' ' + js + "</h4>");