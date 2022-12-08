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

myLibrary[0]  = {
  title:'The Old Man and the Sea',
  author:'Ernest Hemingway',
  pages:'127'
}

myLibrary[1]  = {
  title:'Alice in Wonderland',
  author:'Lewis Carroll',
  pages:'352'
}

myLibrary[2] = {
  title:'The Hobbit',
  author:'J. R. R. Tolkien',
  pages:'310'
}

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

function test() {
  myLibrary.forEach((element) => {

  })
  
  myLibrary.forEach((element) => console.log(element.title));
}