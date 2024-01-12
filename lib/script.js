document.write(' <a href="http://www.youtube.com">Click Me</a><br>')


var a =11;
var b=11.5;
var name="fawzi";

var names = ["fawzi","gharib"]

var users = {
username:["Ahmed","Ali","Osman","Kawa"],
email:["Ahmed@gmail.com","Ali@gmail.com","Osman@gmail.com","Kawa@gmail.com"],
}

for(var i = 0 ; i<users.username.length;i++){
    document.write(users['email'][i]+'<br>');
}