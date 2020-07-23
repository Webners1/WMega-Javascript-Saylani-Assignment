//   Question#1            //
var x = prompt("Enter you first name");
var y = prompt("Enter you last name");
var z = x + y;
alert(z);
//   Question#2           //
var phone = prompt("Enter you favourite phone");
var phonel = phone.length;
document.write("My Favorite Phone is :" + phone);
document.write("<br>");
document.write("Length of string" + phonel);
document.write("<br>");
//   Question#3           //
var char = "pakistan"
document.write("Pakistani");
document.write("<br>");
var n = char.indexOf("n");
document.write("this is the index of n :" + n);
document.write("<br>");
//   Question#4           //
var char1 ="Hello World";
document.write("String :" + char1);
document.write("<br>");
var ind = char1.indexOf("l");
document.write("Last Index of l :" + ind);
document.write("<br>");
//   Question#5           //
var char3 = "Pakistani";
document.write("String :" + char3);
document.write("<br>");
var ind = char3.charAt(3);
document.write("Character at index 3 :" + ind);
document.write("<br>");
//   Question#6           //

var x = prompt("Enter you first name");
var y = prompt("Enter you last name");
var z = x.concat(y);
alert(z);


//   Question#7           //
var char4 = "Hyderabad";
document.write("city :" + char4);
document.write("<br>");
var ind1 = char4.replace("Hyder" ,"Islam");
document.write("After Replacement :" + ind1);
document.write("<br>");

//   Question#8           //
var message = "Ali and Sami are best friends.They play cricket and football together."
var message1 = replace("and" ,"&");
document.write("<br>");
//   Question#9           //
var str = document.write("472");
var num = parseInt(str);
var str = document.write("Type String");
document.write("<br>");
document.write(num);
 document.write("Type Number");
document.write("<br>");

//   Question#10           //
var p = prompt("Enter");
document.write("User input :" + p);
document.write("<br>");
document.write("Upper case :" + p.toUpperCase());
document.write("<br>");
//   Question#11           //
var p1 = prompt("Enter");
document.write("User input :" + p);
document.write("<br>");
document.write("title case :" + p1.toUpperCase(0));
document.write("<br>");
//   Question#12          //

var num = 35.56;
var i;
var z;
for (i == 0; i < 2; i++) {
    
     var num = num * 10;
    document.write("Result :" + num);
}

//   Question#13          //
var inp = prompt("enter username");
if (inp.includes("!") == true  ) {
   alert("Please enter a correct username")
}
else if (inp.includes("@") == true) {
    alert("Please enter a correct username")
}
else if (inp.includes(".") == true) {
    alert("Please enter a correct username")
}
else if (inp.includes(",") == true) {
    alert("Please enter a correct username");
}
else{
    alert("Thnx");
}
//   Question#14          //
var shop = ["cake", "apple", "pie", "cookie", "chips", "patties"];


function beginhere() {
    var input = document.getElementById("Input").value.toLowerCase();
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
//   Question#15          //

var pass = prompt("Enter a password");
if (pass.charAt(0) >= '0' && pass.charAt(0) <= '9') {
    alert("The Pass Word cannot start with number")
} else if (pass.length <= 6 && pass.includes("@") == true && pass.includes("@") == true) {
    prompt("Your password in short");
    
} else{
    alert("thank you");
}

//   Question#16          //
var university = "University of Karachi"; 
for (let i = 0; i < university.length; i++) {
   document.write(university.charAt(i) , "<br>");
    
}
//   Question#17          //
var na = "Pakistan";
nas = na.length;
document.write("User Input :" + na)
document.write("<br>")
document.write("Last Character of input :" + na.charAt(nas - 1));

//   Question#18          //

var text = "The quick brown fox jumps over the lazy the dog";
document.write(text);
var str = text.split('the').length - 1;
document.write("there are" + str + "occurence of the word the")
















