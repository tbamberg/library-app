const library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    let container = document.querySelector("#library-container");
    let newBookCard = createBookCard(book);

    container.appendChild(newBookCard);
    library.push(book);
}

function createBookCard(book) {
    let bookCard = document.createElement("div");
    bookCard.setAttribute("class", "book-card");
    
    let titleText = document.createElement("h2");
    titleText.setAttribute("class", "book-title");
    titleText.textContent = book.title;

    let authorText = document.createElement("h3");
    authorText.setAttribute("class", "book-author");
    authorText.textContent = book.author;

    let pagesText = document.createElement("p");
    pagesText.setAttribute("class", "book-pages");
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

function newBookHandler() {
    let newTitle = document.querySelector("#new-title").value;
    let newAuthor = document.querySelector("#new-author").value;
    let newPages = document.querySelector("#new-pages").value;
    let newRead = document.querySelector("#new-read").checked;
    let newBook = new Book(newTitle, newAuthor, newPages, newRead);
    
    addBookToLibrary(newBook);
}

//event listeners to open, submit, and close the modal
const addBookButton = document.querySelector("#add-book");
const addBookModal = document.querySelector("#add-book-modal");
addBookButton.addEventListener("click", () => {
    addBookModal.showModal();
});

const form = document.querySelector("#add-book-form");
const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", submitClick);

function submitClick(event) {
    event.preventDefault();
    newBookHandler();
    form.reset();
    addBookModal.close();
}

//default books to see the display
const book0 = new Book("The Hobbit", "J.R.R. Tolkien", "295", true);
addBookToLibrary(book0);
const book1 = new Book("The Way of Kings", "Brandon Sanderson", "1008", true);
addBookToLibrary(book1);
const book2 = new Book("Sleeping Giants", "Sylvain Neuvel", "319", false);
addBookToLibrary(book2);
const book3 = new Book("The Fifth Season", "N.K. Jemisin", "512", true);
addBookToLibrary(book3);