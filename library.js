const library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let newTitle = document.querySelector("#new-title").value;
    let newAuthor = document.querySelector("#new-author").value;
    let newPages = document.querySelector("#new-pages").value;
    let newRead = document.querySelector("#new-read").checked;
    let newBook = new Book(newTitle, newAuthor, newPages, newRead);

    library.push(newBook);

    displayLibrary();
}

function displayLibrary() {
    let container = document.querySelector("#library-container");
    let books = document.querySelectorAll(".book-card")

    books.forEach(book => container.removeChild(book));

    for (i in library) {
        let bookCard = createBookCard(library[i], library.indexOf(library[i]));
        container.appendChild(bookCard);
    }
}

function createBookCard(book, index) {
    let bookCard = document.createElement("div");
    bookCard.setAttribute("class", "book-card");
    bookCard.setAttribute("data-index", index);
    
    let titleText = document.createElement("h2");
    titleText.setAttribute("class", "book-title");
    titleText.textContent = book.title;

    let authorText = document.createElement("h3");
    authorText.setAttribute("class", "book-author");
    authorText.textContent = book.author;

    let pagesText = document.createElement("p");
    pagesText.setAttribute("class", "book-pages");
    pagesText.textContent = book.pages + " pages";

    let bookCardBottom = document.createElement("div");
    bookCardBottom.setAttribute("class", "book-card-bottom");

    let readLabel = document.createElement("label");
    readLabel.textContent = "Read";
    readLabel.setAttribute("class", "book-read");

    let readCheckbox = document.createElement("input");
    readCheckbox.setAttribute("type", "checkbox");
    readCheckbox.setAttribute("name", "read-checkbox");
    readCheckbox.setAttribute("class", "read-checkbox");
    if (book.read) readCheckbox.checked = true;
    readLabel.appendChild(readCheckbox);

    let removeButton = document.createElement("button");
    removeButton.setAttribute("class", "remove-button");
    removeButton.innerText = "Remove";

    bookCardBottom.append(readLabel, removeButton);

    bookCard.append(titleText, authorText, pagesText, bookCardBottom);

    return bookCard;
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
    addBookToLibrary();
    form.reset();
    addBookModal.close();
}

const cancelButton = document.querySelector("#cancel-button");
cancelButton.addEventListener("click", () => {
    addBookModal.close();
});

//event listeners to mark/unmark as read or remove a book
//add event listener to container because bookCard is created dynamically
const libraryContainer = document.querySelector("#library-container");
libraryContainer.addEventListener("click", (event) => {
    let targetElement = event.target;
    let bookCardIndex = targetElement.closest(".book-card").dataset.index;
    
    if (targetElement.className === "remove-button") {
        library.splice(bookCardIndex, 1);
        displayLibrary();
    } 
    else if (targetElement.className === "read-checkbox") {
        toggleRead(bookCardIndex);
    }
});

function toggleRead(index) {
    let book = library[index];
    book.read ? book.read = false : book.read = true;
}

//add starting books
const book0 = new Book("The Hobbit", "J.R.R. Tolkien", "295", true);
library.push(book0);
const book1 = new Book("The Way of Kings", "Brandon Sanderson", "1008", true);
library.push(book1);
const book2 = new Book("Sleeping Giants", "Sylvain Neuvel", "319", false);
library.push(book2);
const book3 = new Book("The Fifth Season", "N.K. Jemisin", "512", true);
library.push(book3);

displayLibrary();