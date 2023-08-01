//create a User object with email, name and online status properties
function User(email, name, online){
    this.email = email;
    this.name = name;
    this.online = false;
}

//create two prototype functions for object User: login function and logout function
User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
}

//create two instances of User object: userOne and userTwo
var userOne = User('ahromarreya@gmail.com', 'Arreya', false);
var userTwo = User('khernandez@gmail.com', 'Karina', false);

userOne.login();
userOne.logout();