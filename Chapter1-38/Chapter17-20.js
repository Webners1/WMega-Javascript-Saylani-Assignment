/*        Question#1         */

var emt = [["","",""],
    ["","",""],
    ["","",""]];
    for(let i =0;i<3;i++){
        for(let j = 0;j<3;j++){
            document.write(emt[i][j] + "<br>")
        }
        document.write("<br>")
    }
document.write("<br>")
/*        Question#2         */


var emt1 = [["0","1","2","3","2"],
    ["1","0","1","2","3"],
    ["2","1","0","1","54"]];
    for(let i =0;i<3;i++){
        for(let j = 0;j<3;j++){
            document.write(emt1[i][j] + " ")
        }
        document.write("<br>")
    }

document.write("<br>")

/*        Question#3         */
var i;
for(i =0;i <= 10 ;i++){
    document.write(i);
    document.write("<br>");
}
document.write("<br>")
document.write("<br>")
/*        Question#4         */
var m1 = parseInt(prompt("number"))
var mc = parseInt(prompt("how much"))

for( i=1; i++;i=mc){
   var mak = m1 * i;
document.write(" " + m1 +"*"+ i+"= " + mak + "<br>");}
document.write("<br>")
document.write("<br>")

/*        Question#5         */
var fruits = ["apple","banana", "mango", "orange", "strawberry"] 
var i;

for(i=0 ; i <= 4 ; i++){
    document.write(fruits[i]);
    document.write("<br>");
}
document.write("<br>")
document.write("<br>")
/*        Question#6(A)        */
var Counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] 
document.write("Counting:" + Counting.toString());
document.write("<br>");
/*        Question#6(B)         */
var rev = Counting.reverse();
document.write("Reverse:" + rev.toString());
document.write("<br>");
/*        Question#6(C)         */
var Counting1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] 
document.write("Even:");
    for (var i = 0; i < Counting1.length; i++) {
        if (Counting1[i] % 2 === 0) {
            document.writeln( + Counting1[i]);
        }
    }
document.write("<br>")
document.write("<br>")
/*        Question#6(D)         */
document.write("<br>");
document.write("Odd:");
document.write("<br>");
for (var i = 0; i < Counting1.length; i++) {
    if (Counting1[i] % 2 !== 0) {
        document.writeln(Counting1[i]);
    }
}
document.write("<br>")
/*        Question#6(E)         */
document.write("<br>");

document.write("Series :");
document.write("<br>");
for (var i = 0; i < Counting1.length; i++) {
    if (Counting1[i] % 2 === 0) {
        document.writeln(Counting1[i] + "k");
    }
}
document.write("<br>");

/*        Question#7        */

var shop = ["cake", "apple pie", "cookie", "chips", "patties"]

function beginhere() {
    var input = document.getElementById("Input").value;
    var ind = shop.indexOf(input);
    for (i = 0; i < shop.length; i++) {
        if (shop[i] == input) {
            alert(shop[i] + " is available at index " + ind + " in our Bakery");
            return;
        }
        else {
            document.write("<b>Srry we dont have</b>" + input)
            return;
        }   
    }
 
};
/*        Question#8        */
document.write("<br>");
var nom = [24, 53, 78, 91, 12];
var max = Math.max(...nom);
document.write(nom.toString());
document.write("<br>");
document.write(max + " is the largest number in the array")
document.write("<br>");

document.write("<br>");
var nom1 = [24, 53, 78, 91, 12];
var min = Math.min(...nom1);
document.write(nom.toString());
document.write("<br>");
document.write(min + " is the smallest number in the array")
document.write("<br>");


document.write("<br>");
document.write("<br>");
document.write("<br>");
/*        Question#10        */
var j;
var k;
for (k = 0; k <= 20; k++) {
    var j = document.write(k * 5);
    document.write(",");
}


document.write("<br>")
document.write("<br>")

function fun(number,multiple){
var j;
var k;
for (k = 0; k <= number; k++) {
   var j = document.write(k * multiple);
    document.write(",");
}
document.write("<br>")
document.write("<br>")
}

























