let addTitleBtn = document.getElementById('new-title');
let newEntry = document.getElementById('new-entry');
let gridCon = document.getElementById('book-grid');
let closeBtn = document.querySelector('.close');

const bookGrid = document.getElementById('book-grid');


function addCardToGrid () {
  let bookActual = myLibrary[myLibrary.length - 1];
    const card = document.createElement('div');
    
    card.setAttribute('id', 'card');
    bookGrid.appendChild(card);

    const titleValue = document.createElement('div');
    const authorValue = document.createElement('div');
    const pagesValue = document.createElement('div');
    const removeButton = document.createElement('button');

    card.appendChild(titleValue);
    card.appendChild(authorValue);
    card.appendChild(pagesValue);
    card.appendChild(removeButton);
    
    titleValue.textContent = `"${bookActual.title}"`;
    authorValue.textContent = bookActual.author;
    pagesValue.textContent = `${bookActual.pages} pages`;
    removeButton.textContent = 'REMOVE';

    removeButton.setAttribute('type', 'button');
    removeButton.setAttribute('id', 'remove-book');


    removeButton.addEventListener('click', () => {removeButton.parentElement.remove()})

}


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
  newEntry.classList.toggle('displayToggle');
  closeBtn.classList.toggle('active');
  getBookInfo();
  addCardToGrid();

  console.log(title.value);
  title.value = '';
  author.value = '';
  pages.value = '';
  console.table(myLibrary);
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

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

function getBookInfo() {
//get user input
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;

  const bookEntry = new Book (title, author, pages)

  myLibrary.push(bookEntry);
}