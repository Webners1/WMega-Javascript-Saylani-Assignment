//            Question#1     //

var a = parseFloat(prompt("Enter a number"));
document.write("number " + a);
document.write("<br>");
document.write("round of value " + Math.round(a)); 
document.write("<br>");
document.write("floor " + Math.floor(a));
document.write("<br>");
document.write("ceil " + Math.ceil(a));
document.write("<br>");


//            Question#2     //

var a = parseFloat(prompt("Enter a number"));
document.write("number " + a);
document.write("<br>");
document.write("round of value " + Math.round(a));
document.write("<br>");
document.write("floor " + Math.floor(a));
document.write("<br>");
document.write("ceil " + Math.ceil(a));
document.write("<br>");


//            Question#3     //

var ab = prompt("Enter a number");

document.write("Absolute value of"+ ab +" is "+ Math.abs(ab))
document.write("<br>");

//            Question#4     //
var as = Math.random(2, 100);
var a = as * 10;
document.write("random dice value : " + Math.ceil(a));
document.write("<br>");
document.write("random dice value : " + Math.ceil(a));
document.write("<br>");
document.write("random dice value : " + Math.ceil(a));
document.write("<br>");
document.write("random dice value : " + Math.ceil(a));
document.write("<br>");

//            Question#5     //
var a = Math.random();
as = Math.round(a);
if (as === 1) {
    document.write(as);
    document.write("random coin value : Head");
}
else{
    document.write(as);
    document.write("random coin value : Tail");
}
//            Question#6     //
var as = Math.random(2, 100);
var a = as * 10;
document.write("random number between 1 and 100 : " + Math.ceil(a));
document.write("<br>");
//            Question#7     //

var weight = prompt("emter the weight of the body");
var w = weight.replace('kgs', 'Kilograms');
var w1 = weight.replace('kgs', 'Kilograms');
if (w == "kilograms") {
    document.write("the weight of user is :" + w)
}
else if (w1 == "kilograms") {
    document.write("the weight of user is :" + w1)
}
//            Question#8     //
var asc = Math.random(2, 100);
var ac = asc * 10;
var ac1 = Math.ceil(ac);
var sec = parseInt(prompt("Enter a number"))
if (sec == ac1) {
    alert("You entered the right number")

}
else{
    alert("Try Again")
}





