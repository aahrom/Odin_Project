//When you have a specific type of object that you need to duplicate like our player or inventory items, a better way to create them is using an object constructor, which is a function that looks like this:

// function Player(name, marker){
//     this.name = name
//     this.marker = marker
//     this.sayName = function(){
//         console.log(name)
//     }
// }

// const player1 = new Player('steve', 'X')
// const player2 = new Player('tim', 'O')

// player1.sayName()
// player2.sayName()

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return title + ' by ' + author + ', ' + pages + ', ' + read
    }
}

const book1 = new Book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'not read')
console.log(book1.info());