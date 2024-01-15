
// For printing data on the web page and that
document.write('Hello, World')


document.write('<br><br>---------------------[Variables & Loops]-------------------------<br>')



// Variables

// int
var a = 11;

// double
var b = 11.5;

// String
var name = "fawzi";

// Array 
var names = ["Student 1", "Student 2"]

// Object
var users = {
    username: ["Ahmed", "Ali", "Osman", "Kawa"],
    email: ["Ahmed@gmail.com", "Ali@gmail.com", "Osman@gmail.com", "Kawa@gmail.com"],
}


// Loops 

// For Loops
for (var i = 0; i < users.username.length; i++) {
    document.write(users['email'][i] + '<br>');
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



document.write('<br><br>---------------------[Comparision Operators & If-Else Statement]-------------------------<br>')

var verfied = false;

document.write('verfied = false<br>');

if (verfied == true) {
    document.write('User is verified');
} else {
    document.write('User is not verified');
}

document.write('<br><br>---------------------[Tienary Operators]-------------------------<br>')
verfied ? document.write('User is verified') : document.write('User is not verified');


// Console Log
console.log('This is a console log print statement')



document.write('<br><br>---------------------[Prompt Result & Function]-------------------------<br>')

function askMeAboutWeekday() {
    var weekday = prompt('What day is today?');
    var today = new Date().toLocaleString('en-us', { weekday: 'long' }).toLowerCase();

    switch (weekday.toLowerCase()) {
        case 'monday':
        case 'tuesday':
        case 'wednesday':
        case 'thursday':
        case 'friday':
        case 'saturday':
        case 'sunday':
            if (weekday.toLowerCase() === today) {
                document.write("You chose the correct day!. it is indeed " + today);
            } else {
                document.write("You chose the wrong day. it is " + today + ' today, not ' + weekday);
            }
            break;
        default:
            document.write("Invalid day input.");
    }

}

document.write('<button onclick="askMeAboutWeekday()">Ask me</button>')

document.write('<br><br>---------------------[Array]-------------------------<br>')
document.write('<button onclick="printNames()">Ask me</button>')

function printNames(){
    var names = new Array(5);

    

    for(var i = 0;i<names.length;i++){
        names[i] = prompt('Enter names');
        document.write(names[i])
    }

    
}

document.write('<br><br>---------------------[Atrributes]-------------------------')

// function deletee(id){
//     var editedNames = document.getElementById('ok'+id)
//     editedNames.style.display="none";
//     delete names[i];
//     //alert('Deleted');
//    }
//    document.addEventListener('DOMContentLoaded', function () {
//     var names = ['Fawzi', 'Gharib', 'Ahmed'];

//     // Assuming you have an element with the ID 'student'
//     var namElement = document.getElementById('student');

//     // Check if the element exists before proceeding
//     if (namElement) {
//         // Clear existing content (optional)
//         namElement.innerHTML = '';

//         // Loop through the names and append each one to the element's content
//         for (let index = 0; index < names.length; index++) {
//             namElement.innerHTML += names[index] + '<br>';
//         }
//     } else {
//         console.error("Element with ID 'student' not found.");
//     }
// });


function getImages(){
    var url = document.getElementById('url');
    var image = document.getElementById('images');
    image.setAttribute('src',url.value);
}