var city = prompt("Enter you city")
if(city === "karachi"){
    alert("WELCOME TO THE CITY OF LIGHT")
}
else{
    document.write("dsdasd")
}
/*              Question#2          */
var gender = prompt("Enter Your Gender")
if(gender === "male"){
    alert(" Good Morning Sir")
}
if (gender === "female") {
    alert(" Good Morning Ma'am")
}
/*                Question#3        */
var color = prompt("enter a signal color")
if(color === "red"){
    alert("Must Stop ") 
}
else if (color === "yellow") {
    alert("Ready to move  ")
}
else if (color === "green") {
    alert("Move now ")
}
/*                    Question#4          */
var fuel = parseInt(prompt("enter your fuel in litre"))
if(fuel < 0.25){
    alert("\“Please refill the fuel in your car\”  ")
}
/*                    Question#5          */
/*NOT WORKING        SYNTAX ERROR*/
// a.var a = 4; if (++a === 5) {
//      alert("given condition for variable a is true"); }
// b.var b = 82; if (b++ === 83) { alert("given condition for variable b is true"); }

// c.var c = 12; if (c++ === 13) { alert("condition 1 is true"); } if (c === 13) { alert("condition 2 is true"); } if (++c < 14) { alert("condition 3 is true"); } if (c === 14) { alert("condition 4 is true"); }

// d.var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost) { alert("The cost equals"); }

// e.if(true){ alert("True"); } if (false) { alert("False"); }

// f.if("car" < "cat"){ alert("car is smaller than cat"); }




/*          Question#6           */

var subject1 = parseInt(prompt("Enter You Marks in 1st Subject"));
var tsubject1 = parseInt(prompt("Enter You total Marks of 1st Subject"));
var subject2 = parseInt(prompt("Enter You Marks in 2nd Subject"));
var tsubject2 = parseInt(prompt("Enter You total Marks of 2nd Subject"));
var subject3 = parseInt(prompt("Enter You Marks in 3rd Subject"));
var tsubject3 = parseInt(prompt("Enter You total Marks of 3rd Subject"));
var totmarks = tsubject1 + tsubject2 + tsubject3;
var getmarks = subject1 + subject2 + subject3;
var percentage = (getmarks / totmarks) * 100;
if(percentage >= 80){
    document.write("Total Marks : " + totmarks)
    document.write("<br>")
    document.write("Marks Obtained : " + getmarks)
    document.write("<br>")
    document.write("Percentage : " + percentage + "%")
    document.write("<br>")
    document.write("Grade : A-one")
    document.write("<br>")
    document.write("Remarks : Good Job Bro")
    document.write("<br>")

}
else if (percentage >= 70) {
    document.write("Total Marks : " + totmarks)
    document.write("<br>")
    document.write("Marks Obtained : " + getmarks)
    document.write("<br>")
    document.write("Percentage : " + percentage + "%")
    document.write("<br>")
    document.write("Grade : A")
    document.write("<br>")
    document.write("Remarks : Good")
    document.write("<br>")

}
else if (percentage >= 60) {
    document.write("Total Marks : " + totmarks)
    document.write("<br>")
    document.write("Marks Obtained : " + getmarks)
    document.write("<br>")
    document.write("Percentage : " + percentage + "%")
    document.write("<br>")
    document.write("Grade : B")
    document.write("<br>")
    document.write("Remarks : You need to improve")
    document.write("<br>")

}
else if (percentage < 60) {
    document.write("Total Marks : " + totmarks)
    document.write("<br>")
    document.write("Marks Obtained : " + getmarks)
    document.write("<br>")
    document.write("Percentage : " + percentage + "%")
    document.write("<br>")
    document.write("Grade :Fail")
    document.write("<br>")
    document.write("Remarks : Sorry")
    document.write("<br>")

}
/*                Question#7             */
var realno = Math.random(1,10);
var userno = parseInt(prompt("Guess a secret Number"))
if(userno == realno){
    document.write("Bingo!")
}
else if(userno + 1 == realno){
    document.write("\“Close enough to the correct answer\"")
}
else{
    document.write("\“Not even Close!!\"")
}


/*               Question#8             */

var number = parseInt(prompt("Enter a Number"))
if(number % 3 == 0){
    document.write("\“Number is divible By 3!!\"")
}
else{
    document.write("\“NO its not!!\"")
}

/*               Question#9              */
var getnumber = parseInt(prompt("Enter a Number"))
if (getnumber % 2 == 0) {
    document.write("\“Number is Even!!\"")
}
if (getnumber % 2 !== 0) {
    document.write("\“Number is ODD!!\"")
}
/*               Question#10              */
var tempnumber = parseInt(prompt("Enter a Temperature"))
if(tempnumber >= 40){
    document.write("“It is too hot outside")
}
else if (tempnumber >= 30) {
    document.write("“The Weather today is Normal")
}
else if (tempnumber >= 20) {
    document.write("Today’s Weather is cool.")
}
else if (tempnumber >= 10) {
    document.write("OMG! Today’s weather is so Cool")
}
/*               Question#10              */
var firnumber = parseInt(prompt("Enter a number"))
var secnumber = parseInt(prompt("Enter a Second number"))
var operator = prompt("Enter a Sign")
if(operator == "%"){
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
else{
    document.write("enter a write data!!")
}





























