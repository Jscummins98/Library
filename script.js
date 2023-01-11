const myLibrary = []

function Book (title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

// Function to create a new book from the form
const bookForm = document.querySelector('#book-form')
const checkbox = document.getElementById('checkbox')
let bookEntry
function addBookToLibrary (event) {
  event.preventDefault()

  bookEntry = new Book(bookForm.title.value, bookForm.author.value, bookForm.pages.value, bookForm.read.value)
  myLibrary.push(bookEntry)
  displayBook(bookEntry)
}

// This function adds books to the bookshelf
const bookshelf = document.querySelector('.bookshelf')
function displayBook (book) {
  const bookCard = document.createElement('div')
  bookCard.classList.add('book')

  const title = document.createElement('p')
  title.textContent += book.title
  title.classList.add('title')
  bookCard.appendChild(title)

  const author = document.createElement('p')
  author.textContent += book.author
  author.classList.add('author')
  bookCard.appendChild(author)

  const pages = document.createElement('p')
  pages.textContent += book.pages + ' pages'
  pages.classList.add('pages')
  bookCard.appendChild(pages)

  const readButton = document.createElement('button')
  readButton.classList.add('read')
  if (checkbox.checked) {
    setComplete(readButton)
  } else {
    setIncomplete(readButton)
  }
  readButton.addEventListener('click', () => {
    if (readButton.classList.contains('finished')) {
      setIncomplete(readButton)
    } else {
      setComplete(readButton)
    }
  })
  bookCard.appendChild(readButton)

  const removeButton = document.createElement('button')
  removeButton.textContent += 'Remove'
  removeButton.addEventListener('click', () => {
    bookshelf.removeChild(bookCard)
  })
  bookCard.appendChild(removeButton)

  bookshelf.appendChild(bookCard)
}

// This code block displays, removes, and resets the form
const addButton = document.querySelector('.new-button')
const popUp = document.querySelector('.new-book-form')
const cover = document.querySelector('.cover')
addButton.addEventListener('click', () => {
  cover.style.setProperty('display', 'block')
  popUp.style.setProperty('display', 'block')
})

const closeButton = document.querySelector('.close-button')
closeButton.addEventListener('click', removeForm)

function removeForm () {
  cover.style.setProperty('display', 'none')
  popUp.style.setProperty('display', 'none')
}

function resetForm () {
  bookForm.title.value = ''
  bookForm.author.value = ''
  bookForm.pages.value = ''
  checkbox.checked = false
}

// This block gives the form submit button functionality
const submitButton = document.querySelector('.submit-button')
submitButton.addEventListener('click', addBookToLibrary)
submitButton.addEventListener('click', removeForm)
submitButton.addEventListener('click', resetForm)

// These functions change the completed/incomplete buttons
function setComplete (element) {
  element.classList.add('finished')
  element.textContent = 'Completed'
}
function setIncomplete (element) {
  element.classList.remove('finished')
  element.textContent = 'Incomplete'
}

// Adds default books to the bookshelf
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
myLibrary.push(theHobbit)
displayBook(theHobbit)
const harryPotter = new Book('Harry Potter and the Chamber of Secrets', 'J.K. Rowling', 251, false)
myLibrary.push(harryPotter)
displayBook(harryPotter)
const narnia = new Book('The Lion, The Witch and the Wardrobe', 'C.S. Lewis', 172, false)
myLibrary.push(narnia)
displayBook(narnia)
