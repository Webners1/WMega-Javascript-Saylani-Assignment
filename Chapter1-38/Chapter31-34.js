//     Question #1  //

var x = new Date();
document.write(x);
document.write("<br>");
var date = ["Jan", "Feb", "March", "April", "May", "June", "july" ,"August","september","october","Novembor","December"]
//     Question #2  //

var h = x.getMonth();
document.write("current month :"+ date[h]);

document.write("<br>");
//     Question #3  //
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var h = x.getDay();
document.write("Today :" + dayNames[h]);
//     Question #4  //
document.write("<br>");
if (dayNames[h] == "Sun") {
    alert("IT is a Funday")
}
else if (dayNames[h] == "Sat") {
    alert("IT is a Funday")
}
//     Question #5  //

var d = new Date();
var date = d.getDate();
if (date <= 15) {
    document.write("<h2>"+ "First fifteen days of months" + "</h2>")
}
else{
    document.write("<h2>" + "Last days of the month" + "</h2>")
}
document.write("<br>");
//     Question #6  //

var d = new Date();

var milli = d.getTime();
var sec = milli / 1000;
document.write("<br>");
document.write("Elapsed Milliseconds since Janaury 1,1970:" + milli);
document.write("<br>");
document.write("Elapsed seconds since Janaury 1,1970:" + sec);
document.write("<br>");
//     Question #7  //


var hour = d.getHours();
if (hour < 12) {
    document.write("<h2>" + "ITS AM" + "</h2>")
}
else if (hour <= 24 && hour > 12) {
    document.write("<h2>" + "ITS PM" + "</h2>")
}
else if (hour == 12) {
    document.write("<h2>" + "ITS PM" + "</h2>")
}

//     Question #8    //
var times = new Date("December 31,2020")

//     Question #9    //

var Ramazan = new Date("March 30, 2020");
var ramamil = Ramazan.getTime();

var today = new Date();
var todmil = today.getTime();
var diff =  todmil - ramamil;
document.write("<br>");
var difday = diff /( 1000 * 60 * 60 * 24);
difday = Math.floor(difday);
document.write(difday + " Days have passes since 1st Ramadan,2020")
document.write("<br>");
//     Question #10    //
var t = new Date();
document.write("<br>");
var tm = new Date("December 15 , 2015");
var tmy = tm.getFullYear();
var t1 = t.getTime();
var tm1 = tm.getTime();
var dift = (t1 - tm1);
document.write("On refrence date since" + t +  ","+ dift +" seconds have passes since begining of " + tmy)
document.write("<br>");
document.write("<br>");
//     Question #11    //
document.write("current date :" + today);
var g = new Date();
var v = g.getHours();
var v1 = v - 1;
 g.setHours(v1);
document.write("<br>");
document.write("1 hour ago :" + g);
document.write("<br>");
//     Question #12    //
document.write("current date :" + today);
var y = new Date();
var ys = y.getFullYear();
var vs1 = ys - 100;
y.setFullYear(vs1);
document.write("<br>");
document.write("100 Year back it was:" + y);
document.write("<br>");
//     Question #13    //
var old = prompt("Enter Your Age")
var age = new Date();
var month = age.getMonth();
var ages = age.getFullYear();
var years1 = ages - old ;
document.write("<br>");
document.write("Your Date of birth is" + years1 );
document.write("<br>");
//     Question #14    //
var dates = ["Jan", "Feb", "March", "April", "May", "June", "july", "August", "september", "october", "Novembor", "December"]


document.write("<br>");
document.write("<h1>" + "K.E Electrib Bill" + "</h1>")
document.write("Customer Name :<b>" + " Muzammil Siddiqui" + "</b>")
document.write("<br>");
document.write("Month :<b>" + dates[month] + "</b>")
document.write("<br>");
document.write("Number of units :<b>" + " 410" + "</b>")
document.write("<br>");
document.write("Charge per units :<b>" + "16" + "</b>")
document.write("<br>");
document.write("<br>");

var am = 410*16;
var am = Math.floor(am);
var late = 350;
var gross = am + late;
document.write("Net Amount Payable (within Due Date)  :<b>" + am + "</b>")
document.write("<br>");
document.write("late payment surcharge :<b>" + late + "</b>")
document.write("<br>");
document.write("Gross Amount Payable (after Due Date)  :<b>" + gross + "</b>")
document.write("<br>");











