// ==========================================
// FEATURE 1 & 2: Form Toggles & Dynamic Fields
// ==========================================
const addBookSection = document.querySelector('.add-book-section');
const toggleFormBtn = document.getElementById('toggle-form');
const typeSelect = document.getElementById('type');
const ebookDetails = document.getElementById('ebook-details');
const bookForm = document.getElementById('book-form');
const bookList = document.getElementById('book-list');

// Toggle the Add Book Form visibility
toggleFormBtn.addEventListener('click', () => {
  if (addBookSection.style.display === 'none') {
    addBookSection.style.display = 'block';
    toggleFormBtn.textContent = 'Hide Form';
  } else {
    addBookSection.style.display = 'none';
    toggleFormBtn.textContent = 'Add New Book';
  }
});

// Show/Hide File Size input based on Book Type selection
typeSelect.addEventListener('change', () => {
  if (typeSelect.value === 'ebook') {
    ebookDetails.style.display = 'block';
  } else {
    ebookDetails.style.display = 'none';
  }
});

// ==========================================
// FEATURE 3, 4 & 9: OOP Classes (Book & Ebook)
// ==========================================

// Base Class
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Date.now();
    this.type = 'physical';
    this.available = true;
    this.borrower = null;
  }

  borrow(borrowerName) {
    this.borrower = borrowerName;
    this.available = false;
  }

  markReturned() {
    this.borrower = null;
    this.available = true;
  }

  getHTML() {
    const card = document.createElement('div');
    card.className = `book-card ${this.available ? 'available' : 'borrowed'}`;

    card.innerHTML = `
      <h3 class="book-title">${this.title}</h3>
      <p class="book-meta">By: ${this.author}</p>
      <span class="status-badge ${this.available ? 'status-available' : 'status-borrowed'}">
        ${this.available ? 'Available' : `Borrowed by ${this.borrower}`}
      </span>
      <div class="book-actions">
        ${
          this.available
            ? `<button class="btn btn-borrow">Borrow</button>`
            : `<button class="btn btn-return">Return</button>`
        }
        <button class="btn btn-remove">Remove</button>
      </div>
    `;
    return card;
  }
}

// Subclass extending Book
class Ebook extends Book {
  constructor(title, author, fileSize) {
    super(title, author);
    this.type = 'ebook';
    this.fileSize = fileSize;
  }

  borrow(borrowerName) {
    this.borrower = borrowerName;
    // E-books remain "available" functionally, but we log who downloaded it
  }

  markReturned() {
    this.borrower = null;
  }

  getHTML() {
    const card = document.createElement('div');
    card.className = `book-card ebook`; 

    card.innerHTML = `
      <h3 class="book-title">${this.title} <span style="font-size: 12px; font-weight: normal;">(E-Book)</span></h3>
      <p class="book-meta">By: ${this.author}</p>
      <p class="book-meta">Size: ${this.fileSize} MB</p>
      <span class="status-badge status-ebook">Digital Format</span>
      <div class="book-actions">
        ${
          !this.borrower
            ? `<button class="btn btn-borrow">Download</button>`
            : `<button class="btn btn-return">Return</button>`
        }
        <button class="btn btn-remove">Remove</button>
      </div>
    `;
    return card;
  }
}

// ==========================================
// FEATURE 5, 6, 7: Application State & UI Rendering
// ==========================================
let books = [];

function displayBooks() {
  bookList.innerHTML = ''; // Clear current grid

  if (books.length === 0) {
    bookList.innerHTML = '<p>No Books Found in the Library.</p>';
    return;
  }

  books.forEach((book) => {
    // Construct DOM element from the object method
    const bookCard = book.getHTML();

    // Select buttons inside the generated card
    const borrowBtn = bookCard.querySelector('.btn-borrow');
    const returnBtn = bookCard.querySelector('.btn-return');
    const removeBtn = bookCard.querySelector('.btn-remove');

    // Attach Borrow / Download Event
    if (borrowBtn) {
      borrowBtn.addEventListener('click', () => {
        const borrower = prompt("Enter borrower's name:");
        if (borrower && borrower.trim() !== '') {
          book.borrow(borrower.trim());
          saveBooks();
          displayBooks(); // Re-render UI
        }
      });
    }

    // Attach Return Event
    if (returnBtn) {
      returnBtn.addEventListener('click', () => {
        book.markReturned();
        saveBooks();
        displayBooks();
      });
    }

    // Attach Remove Event
    if (removeBtn) {
      removeBtn.addEventListener('click', () => {
        books = books.filter((b) => b.id !== book.id);
        saveBooks();
        displayBooks();
      });
    }

    // Append finished card to the grid
    bookList.appendChild(bookCard);
  });
}

// Handle Form Submission (Adding new books)
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const type = typeSelect.value;

  let newBook;
  if (type === 'ebook') {
    const fileSize = document.getElementById('file-size').value;
    newBook = new Ebook(title, author, fileSize);
  } else {
    newBook = new Book(title, author);
  }

  books.push(newBook);
  saveBooks();
  displayBooks();

  // Reset form and UI
  bookForm.reset();
  addBookSection.style.display = 'none';
  toggleFormBtn.textContent = 'Add New Book';
  ebookDetails.style.display = 'none';
});

// ==========================================
// FEATURE 8: LocalStorage Persistence
// ==========================================
function saveBooks() {
  localStorage.setItem('booksArray', JSON.stringify(books));
}

function loadBooks() {
  const storedBooks = localStorage.getItem('booksArray');
  
  if (storedBooks) {
    const bookObjects = JSON.parse(storedBooks);
    
    // Reconstruct plain objects back into Book/Ebook Class Instances
    books = bookObjects.map((obj) => {
      let instance;
      if (obj.type === 'ebook') {
        instance = new Ebook(obj.title, obj.author, obj.fileSize);
      } else {
        instance = new Book(obj.title, obj.author);
      }
      
      // Restore previous state properties
      instance.id = obj.id;
      instance.available = obj.available;
      instance.borrower = obj.borrower;
      
      return instance;
    });
  }
  
  // Initial render
  displayBooks();
}

// Trigger initial load when the document is ready
document.addEventListener('DOMContentLoaded', loadBooks);