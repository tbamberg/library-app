const library = [];

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

function createBookCard(book) {
    let bookCard = document.createElement("div");
    bookCard.setAttribute("class", "book-card");
    
    let titleText = document.createElement("h2");
    titleText.setAttribute("class", "title");
    titleText.textContent = book.title;

    let authorText = document.createElement("h3");
    authorText.setAttribute("class", "author");
    authorText.textContent = book.author;

    let pagesText = document.createElement("p");
    pagesText.setAttribute("class", "pages");
    pagesText.textContent = book.pages + " pages";

    let readCheckbox = document.createElement("input");
    readCheckbox.setAttribute("type", "checkbox");
    readCheckbox.setAttribute("class", "read");
    readCheckbox.setAttribute("name", "read");
    if (book.read) readCheckbox.checked = true;

    let readLabel = document.createElement("label");
    readLabel.textContent = "Read";
    readLabel.appendChild(readCheckbox);

    bookCard.append(titleText, authorText, pagesText, readLabel);

    return bookCard;
}

function displayLibrary() {
    let container = document.querySelector("#library-container");
    for (i in library) {
        let newBookCard = createBookCard(library[i]);
        container.appendChild(newBookCard);
    }
}

const addBookButton = document.querySelector("#add-book");
const addBookModal = document.querySelector("#add-book-modal");
addBookButton.addEventListener("click", () => {
    addBookModal.showModal();
});

const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", submitClick, false);

function submitClick(event) {
    console.log("test");
    event.preventDefault();
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