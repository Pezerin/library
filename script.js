const myLibrary = [];
const dialog = document.querySelector("dialog");
const open = document.querySelector(".open");
const submit = document.querySelector(".add");
const books = document.querySelector(".books");

open.addEventListener("click", () => {
    dialog.showModal();
});

submit.addEventListener("click", () => {
    addBookToLibrary();
    displayBook();
});

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function() {
        if (isRead) {
            return `${title} by ${author}, ${pages} pages, read`;
        } else {
            return `${title} by ${author}, ${pages} pages, not read yet`;
        }
    }
}

function addBookToLibrary() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const isRead = document.querySelector("#read").checked;
    const book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
}

function displayBook() {
    books.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        const div = document.createElement("div");
        div.classList.add("book");
        div.id = `${i}`;

        const p = document.createElement("p");
        p.classList.add("info");
        p.textContent = myLibrary[i].info();
        div.appendChild(p);

        const buttons = document.createElement("div");
        buttons.classList.add("buttons");
        div.appendChild(buttons);

        const toggle = document.createElement("button");
        toggle.classList.add("toggle");
        toggle.textContent = "Toggle Read";
        buttons.appendChild(toggle);

        const remove = document.createElement("button");
        remove.classList.add("remove");
        remove.textContent = "Remove";
        buttons.appendChild(remove);

        books.appendChild(div);
    }
}