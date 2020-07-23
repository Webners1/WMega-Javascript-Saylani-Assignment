/*        Question#1    */
var x = ["","","",""]
/*        Question#2    */
var y = {
    student1: "",
    student2: "",
    student3: "",
   student4: ""
};
/*        Question#3    */
var str = ["A","B","C","D"]
document.write(str.toString());
document.write("<br>");
/*        Question#4    */
var num = [1,2 ,3 , 4]
document.write(num.toString());
document.write("<br>");
/*        Question#5    */
var bol = [Boolean(1), Boolean(2), Boolean(3), Boolean(4)]
document.write(bol.toString());
document.write("<br>");
/*        Question#6    */
var mix = [1, "A", Boolean(4), "B"]
document.write(mix.toString());

/*        Question#7    */
document.write("<br>");
document.write("Qualifiction :");
var qual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"]

document.write("<br>");
document.write(qual[0]);
document.write("<br>");
document.write(qual[1]);
document.write("<br>");
document.write(qual[2]);
document.write("<br>");
document.write(qual[3]);
document.write("<br>");
document.write(qual[4]);
document.write("<br>");
document.write(qual[5]);
document.write("<br>");
document.write(qual[6]);
document.write("<br>");
document.write(qual[7]);
document.write("<br>");
/*        Question#8    */
var st = prompt("Student Name")
var stm = parseInt(prompt("Student Marks"))
var st1 = prompt("Student Name")
var stm1 = parseInt(prompt("Student Marks"))
var st2 = prompt("Student Name")
var stm2 = parseInt(prompt("Student Marks"))
var student = [st,st1 ,st2 ]
var studentm = [stm, stm1, stm2]
var per1 = (stm / 500) * 100;
var per2 = (stm1 / 500) * 100;
var per3 = (stm2 / 500) * 100;

document.write("Score of:" + " "+ st + "is  " + stm + ".Percentage : " + per1)
document.write("<br>");
document.write("Score of:" + " " + st1 + "is  " + stm1 + ".Percentage :" + per2)
document.write("<br>");
document.write("Score of:" + " " + st2 + "is  " + stm2 + ".Percentage :" + per3)

/*        Question#9    */


var color = ["red","orange","yellow","green","black"]
var ask = prompt("you want to add color");
if(ask == "yes"){
    var add = prompt("tell a color")
    color.unshift(add);
/*        Question#9(B)    */
    var add1 = prompt("tell a color to add in the end")
    color.shift(add1)
    document.write(color.toString());
    document.write("<br>")
}
else{
    document.write("ok")
}
/*        Question#9(C)    */

document.write("<br>")
color.unshift("brown","white");
document.write(color.toString());
document.write("<br>")
document.write("<br>")
/*        Question#9(D)    */
color.shift();
document.write(color.toString());
document.write("<br>")
/*        Question#9(E)    */
color.pop();
document.write(color.toString());
document.write("<br>")
/*        Question#9(F)    */
var indx = parseInt(prompt("enter a Index no u want"))
var adcolr = prompt("enter a color")
color[indx] = adcolr;
document.write(color.toString());
document.write("<br>")

/*        Question#9(G)    */
var indx1 = parseInt(prompt("enter a Index no u want"))
var adcolr1 = prompt("how much")
delete color[indx1];

document.write(color.toString());
document.write("<br>")

/*        Question#10    */
var score = [100,323,423,422,323]
score.sort();
/*        Question#11    */
var city = ["Karachi","lahore","islamabad","quetta","peshawar"]
score.slice(2,5);

/*        Question#12   */

var arr = ["This" , " is" , "my ", "cat"];
arr.join(" ");
/*        Question#13   */

var chars = ["First","In","First","Out"]

/*        Question#14   */

var chars1 = ["mouse", "Keyboard", "printer", "monitor"]
chars1.reverse();


/*        Question#15   */


var chars2 = ["Apple", "Samsung", "Motorola", " Nokia", " Sony "," Haier"]
document.write(chars2[0]); 
document.write(chars2[1]); 
document.write(chars2[2]); 
document.write(chars2[3]); 
document.write(chars2[4]); 
document.write(chars2[5]); 


