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
        review = 'not reviewed yet',
    ) {
        this.title = title 
        this.author = author
        this.pages = pages
        this.isRead = isRead
        this.review = review
    }
}

Book.prototype.toggleRead = function() {
    this.isRead = !this.isRead
    displayBooks()
}

class Library {
    constructor() {
        this.books = []
    }
    addBook(newBook) {
        this.books.push(newBook)
    }

    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title)
        
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
}


// get book from form

const getBookInput = ()=>{
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const isRead = document.getElementById('is-read').checked
    const review = document.getElementById('text-area').value
    return new Book(title, author, pages, isRead, review)
}

const addBook = (e) => {
    e.preventDefault()
    const newBook = getBookInput()

    if (library.isInLibrary(newBook)) {
        alert('this book is already in your library')
        return
    }
    library.addBook(newBook)
    submitBook.reset()
    moveForm()
    displayBooks()
}


submitBook.onsubmit = addBook


const displayBooks = ()=> {
    content.innerHTML='';
    library.books.forEach(book => {
        const card = document.createElement('div');
        const bookActions = document.createElement("div")
        card.classList.add('card')
        bookActions.classList.add("card-action")

        card.innerHTML= `
                <h4>${book.title} by ${book.author}, ${book.pages} pages</h4>
                <p> ${book.review}</p>      
            `;
        content.appendChild(card);

        const favorite = document.createElement('button')
        const deleteCard = document.createElement('button')
        const finished = document.createElement('button')
        const favImg = document.createElement('img')
        const delImg = document.createElement('img')
        const readIt = document.createElement('img')

        favImg.src = "./images/dashboard/favorite.png";
        delImg.src = "./images/dashboard/clear.png"

        if (book.isRead) {
            readIt.src = "./images/dashboard/tick.png"
            finished.textContent = 'finished'
        }else{
            readIt.src = "./images/dashboard/open-book.png"
            finished.textContent = 'still reading'
        }

        deleteCard.appendChild(delImg)
        favorite.appendChild(favImg)
        // trigger card to delete and store data-title so that title can be passed to remove function
        deleteCard.onclick = removeBook
        deleteCard.dataset.title = book.title

        finished.onclick = book.toggleRead.bind(book)
        finished.dataset.title = book.title

        bookActions.appendChild(favorite)
        bookActions.appendChild(deleteCard)
        
        finished.appendChild(readIt)
        bookActions.appendChild(finished)

        card.appendChild(bookActions)
    });
}

const removeBook = (e) => {
    const titleToRemove = e.target.parentNode.dataset.title;
    library.removeBook(titleToRemove);
    displayBooks();
}

// <a href=""><img src="./images/dashboard/favorite.png" alt="favorite"></a>
// <a href=""><img src="./images/dashboard/share.png" alt="share"></a>