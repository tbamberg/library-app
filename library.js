let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return title + " by " + author + ", " + pages + " pages, Read=" + read; 
    };
}

function addBookToLibrary(book) {
    library.push(book);
}

function displayLibrary() {
    let container = document.querySelector("#library-container");
    for (i in library) {
        let bookCard = document.createElement("div");
        bookCard.setAttribute("class", "book-card");
        
        let titleText = document.createElement("h2");
        titleText.setAttribute("class", "title");
        titleText.textContent = library[i].title;

        let authorText = document.createElement("h3");
        authorText.setAttribute("class", "author");
        authorText.textContent = library[i].author;

        let pagesText = document.createElement("p");
        pagesText.setAttribute("class", "pages");
        pagesText.textContent = library[i].pages + " pages";

        let readText = document.createElement("p");
        readText.setAttribute("class", "read");
        readText.textContent = "Read? " + library[i].read;

        bookCard.append(titleText, authorText, pagesText, readText);
        container.appendChild(bookCard);
    }
}

const book0 = new Book("The Hobbit", "J.R.R. Tolkien", "295", true);
addBookToLibrary(book0);
const book1 = new Book("The Way of Kings", "Brandon Sanderson", "1008", true);
addBookToLibrary(book1);
const book2 = new Book("Sleeping Giants", "Sylvain Neuvel", "319", false);
addBookToLibrary(book2);
const book3 = new Book("The Fifth Season", "N.K. Jemisin", "512", true);
addBookToLibrary(book3);

displayLibrary();