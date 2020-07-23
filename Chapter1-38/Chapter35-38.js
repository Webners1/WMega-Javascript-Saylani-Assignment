//            Question#1         //

function date() {
    var x = new Date;
    document.write(x);
}
date();
//            Question#2         //
function name() {
   x = prompt("Enter first name");
    y = prompt("Enter second name");
    str = x + y;
    document.write(str);

}
document.write("<br>");
name();
//            Question#3         //
function num() {
    x = parseInt(prompt("Enter Number"));
    y = parseInt(prompt("Enter  SecondNumber"));
    str = x + y;
    document.write(str);

}
num();
//            Question#4         //
document.write("<br>");
document.write("<br>");
function calc(params) {
    var firnumber = parseInt(prompt("Enter a number"))
    var secnumber = parseInt(prompt("Enter a Second number"))
    var operator = prompt("Enter a Sign")
    if (operator == "%") {
        document.write(firnumber % secnumber);
    }
    else if (operator == "*") {
        document.write(firnumber * secnumber);
    }
    else if (operator == "+") {
        document.write(firnumber + secnumber);
    }
    else if (operator == "-") {
        document.write(firnumber - secnumber);
    }
    else if (operator == "/") {
        document.write(firnumber / secnumber);
    }
    else {
        document.write("enter a write data!!")
    }
}
//            Question#5         //
document.write("<br>");
function sqaure() {
    var x = prompt("Enter a number");
    var sq = x ** 2;

}
document.write("<br>");
sqaure(3);
//            Question#6         //
function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
document.write("<br>");
var ys = factorial(5)
document.write(ys)
//            Question#7         //
function loop(params) {
    x = parseInt(prompt("Enter a first number"))
    y = parseInt(prompt("Enter a  last number"));
    for (let i = x; i <= y; i++) {
        document.write(i);
        document.write("<br>");
        
    }
}
//            Question#8         //
document.write("<br>");
function triangle(x, y) {
    function square(x, y) {
        var z = x**2 + y**2;
        var z = Math.sqrt(z);
        return z;
    }
    var hyptenuse = square(x, y);
    return hyptenuse
}
triangle();
//            Question#9         //
document.write("<br>");
function area(width,height) {
    function invalue(width = 0-9,height = 0-9) {
        var Area = width * height;
        return Area
    }
    function invar(width = a-z, height = a-z) {
    var area = width.concat(height);
}}
//            Question#10        //
document.write("<br>");
function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len / 2);

    for (var i = 0; i < mid; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}
document.write("<br>");
//            Question#11        //

function capital(text) {
    text = text.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
        return text;
}
document.write("<br>");
//            Question#12        //

function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
document.write("<br>");


//            Question#13       //

function lengthstr(mainStr,letter) {
   var z = (mainStr.split(letter).length - 1)
return z;
}

document.write("<br>");
//            Question#14       //

function calcCircumference(radius) {
    var x = 2 * 3.14 * radius;
    return document.write("<h2>The circumference is :"+ x +"</h2>");
} 
document.write("<br>");
calcCircumference(3);
function calcArea(radius) {
    var x = 3.14 * (radius **2);
    return document.write("<h2>The Area is :" + x + "</h2>");
}
document.write("<br>");

calcArea(3);

