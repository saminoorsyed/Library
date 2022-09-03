let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false
    this.info = function (){
        return `${title} by ${author}, ${pages}pages, ${(read)?"finished":"not read yet"}`;
    }
}

Book.prototype.readIt = function () {this.read = true}
const sami = new Book( 'sami','Sami', 'too many', false);

console.log(sami.read);

sami.readIt();

console.log(sami.read);