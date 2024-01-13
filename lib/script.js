
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

// Note when opertors comes after equal sign [eg: a+=b ] that still means a+b
// And that is called assignment operator

// Addition
document.write(a + ' + ' + b + ' = ');
document.write(a += b);
document.write("<br>");

// Division
document.write(a + ' / ' + b + ' = ');
document.write(a /= b);
document.write("<br>");

// Multiplication
document.write(a + ' * ' + b + ' = ');
document.write(a *= b);
document.write("<br>");

// Subtraction
document.write(a + ' - ' + b + ' = ');
document.write(a -= a);


