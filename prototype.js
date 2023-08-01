//the prototype is another object that the original object inherits from, which is to say, the original object has access to all of its prototype’s methods and properties.


function Player(name, marker){
    this.name = name
    this.marker = marker
    this.sayName = function(){
        console.log(name)
    }
}

Player.prototype.sayHello = function(){
    console.log("Hello, I'm a player")
}

const player1 = new Player('steve', 'X')
const player2 = new Player('tim', 'O')


player1.sayHello();