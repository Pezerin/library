const myLibrary = [];
const dialog = document.querySelector("dialog");
const open = document.querySelector(".open");
const submit = document.querySelector(".add");
const books = document.querySelector(".books");
const remove = document.querySelector(".remove");

open.addEventListener("click", () => {
  dialog.showModal();
});

submit.addEventListener("click", () => {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");

  if (
    !title.checkValidity() ||
    !author.checkValidity() ||
    !pages.checkValidity()
  ) {
    return;
  }

  addBookToLibrary();
  displayBooks();
});

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  info() {
    if (this.isRead) {
      return `${this.title} by ${this.author}, ${this.pages} pages, read`;
    } else {
      return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
    }
  }

  toggleRead() {
    this.isRead = !this.isRead;
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

function displayBooks() {
  books.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const div = document.createElement("div");
    div.classList.add("book");

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
    toggle.addEventListener("click", () => {
      myLibrary[i].toggleRead();
      displayBooks();
    });
    buttons.appendChild(toggle);

    const remove = document.createElement("button");
    remove.classList.add("remove");
    remove.textContent = "Remove";
    remove.addEventListener("click", () => {
      myLibrary.splice(i, 1);
      displayBooks();
    });
    buttons.appendChild(remove);

    books.appendChild(div);
  }
}
