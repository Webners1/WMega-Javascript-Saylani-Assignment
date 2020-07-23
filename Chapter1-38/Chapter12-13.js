/*              Question#1                */

// var a = typeof(prompt("enter something"))
// if(a = Number){

// }




/*              Question#4                */
var char = prompt("enter a word");
if(char == "e" || "a" || "i" || "o" || "u"){
    document.write("IT IS A VOWEL");
}
else{
    document.write("False");
}














/*        Question#6          */

var greeting; var hour = 13; if (hour < 18) { greeting = "Good day";} 
else
 {greeting = "Good evening"; }


 /*     Question#7       */


 var x = parseInt(prompt("enter a time"))
 if(x >= 0000 && time < 1200){
     document.write("\"Good Morning\"")
 }
if (x >= 1200 && time < 1700) {
    document.write("\"Good Afternoon!\"")
}
if (x >= 1700 && time < 2100) {
    document.write("\"Good Evening\"")
}
if (x >= 2100 && time <= 2359) {
    document.write("\"Good Night\"")
}