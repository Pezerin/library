const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function() {
        if (isRead) {
            return `${title} by ${author}, ${pages} pages, read`
        } else {
            return `${title} by ${author}, ${pages} pages, not read yet`
        }
    }
}

function addBookToLibrary() {
    
}