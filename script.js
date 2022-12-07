let addTitleBtn = document.getElementById('new-title');
let newEntry = document.getElementById('new-entry');

let gridCon = document.getElementById('book-grid');

let closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
    closeBtn.classList.toggle('active');
    newEntry.classList.toggle('displayToggle');

});

addTitleBtn.addEventListener('click', () => {
    newEntry.classList.toggle('displayToggle');
    closeBtn.classList.toggle('active');
} );

let newBook = document.getElementById('new-book');
newBook.addEventListener('click', () => {
    
})




let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}