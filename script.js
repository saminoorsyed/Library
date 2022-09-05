const content = document.querySelector('.content');
const addBookButt = document.getElementById('add-book');
const addForm = document.querySelector('.form');
const submitBook = document.getElementById('submitBook');

// constructors

class Book {
    constructor ( 
        title = 'unknown',
        author = 'unknown',
        pages = 'unknown',
        isRead = false,
    ) {
        this.title = title
        this.author = author
        this.pages = pages
        this.isRead = isRead
    }
}

class Library {
    constructor() {
        this.books = []
    }
    addBook(newBook) {
        this.books.push(newBook)
    }

    removeBook(title) {
        this.books.filter((book) => book.title !== title)
    }

    getBook(title) {
        return this.books.find((book) => book.title === title)
    }

    isInLibrary(newBook) {
        return this.books.some((book)=> book.title === newBook.title)
    }
}

const library = new Library();

// functions

const moveForm = () => {
    addForm.classList.toggle('front-center');
    console.log('hello')
}


// get book from form

const getBookInput = ()=>{
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const isRead = document.getElementById('is-read').checked
    return new Book(title, author, pages, isRead)
}

const addBook = (e) => {
    e.preventDefault()
    const newBook = getBookInput()

    if (library.isInLibrary(newBook)) {
        alert('this book is already in your library');
        return
    }
    library.addBook(newBook);

    console.log(library.books);
}

submitBook.onsubmit = addBook;