
// For printing data on the web page and that
document.write('Hello, World')


document.write('<br><br>---------------------[Variables & Loops]-------------------------<br>')



// Variables

// int
var a =11;

// double
var b=11.5;

// String
var name="fawzi";

// Array 
var names = ["Student 1","Student 2"]

// Object
var users = {
username:["Ahmed","Ali","Osman","Kawa"],
email:["Ahmed@gmail.com","Ali@gmail.com","Osman@gmail.com","Kawa@gmail.com"],
}


// Loops 

// For Loops
for(var i = 0 ; i<users.username.length;i++){
    document.write(users['email'][i]+'<br>');
}

// For Each 
names.forEach(element => {
    document.write(element)
});

document.write('<br><br>---------------------[Operators]-------------------------<br>')


// Operators

// Addition
document.write(11 + ' + ' + 22 + ' = ');
document.write(11 + 22);
document.write("<br>");

// Division
document.write(11 + ' / ' + 11 + ' = ');
document.write(11 / 11);
document.write("<br>");

// Multiplication
document.write(11 + ' * ' + 22 + ' = ');
document.write(11 * 22);
document.write("<br>");

// Subtraction
document.write(22 + ' - ' + 11 + ' = ');
document.write(22 - 11);


document.write('<br><br>---------------------[Assignment Operators]-------------------------<br>')


// Operators

// Note when opertors comes after equal sign [eg: a+=b ] that still means a+b
// And that is called assignment operator and the variable that comes first holds
// the result of operation in this below [numOne] will get the final result

// Assignment Operator

var numOne = 3;
var numTwo = 7;
document.write('numOne = 7 <br> numTwo = 3<br><br>');
document.write('numOne += numTwo<br>');
document.write('<br>numOne = ')
document.write(numOne += numTwo);
document.write('<br>numTwo = ')
document.write(numTwo);
document.write("<br>");



document.write('<br><br>---------------------[Comparision Operators]-------------------------<br>')

var verfied = false;

document.write('verfied = false<br>');

if (verfied==true) {
    document.write('User is verified');
} else {
    document.write('User is not verified');
}

document.write('<br><br>---------------------[Tienary Operators]-------------------------<br>')
verfied ? document.write('User is verified') :  document.write('User is not verified');


// Console Log
console.log('This is a console log print statement')