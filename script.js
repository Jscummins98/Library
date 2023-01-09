const myLibrary = []

function Book (title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    return title + ' by ' + author + ', ' + pages + ' pages, ' + read
  }
}

function addBookToLibrary (Book) {
  myLibrary.push(Book)
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
addBookToLibrary(theHobbit)
const harryPotter = new Book('Harry Potter and the Chamber of Secrets', 'J.K. Rowling', 251, false)
addBookToLibrary(harryPotter)
const narnia = new Book('The Lion, The Witch and the Wardrobe', 'C.S. Lewis', 172, false)
addBookToLibrary(narnia)

// This code block displays the form
const addButton = document.querySelector('.new-button')
const popUp = document.querySelector('.new-book-form')
const cover = document.querySelector('.cover')
addButton.addEventListener('click', () => {
  cover.style.setProperty('display', 'block')
  popUp.style.setProperty('display', 'block')
})
const closeButton = document.querySelector('.close-button')
closeButton.addEventListener('click', () => {
  cover.style.setProperty('display', 'none')
  popUp.style.setProperty('display', 'none')
})

const bookshelf = document.querySelector('.bookshelf')
for (const book of myLibrary) { // This loop adds books to the bookshelf
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
  readButton.textContent += 'Incomplete'
  readButton.classList.add('read')
  readButton.addEventListener('click', () => {
    if (readButton.classList.contains('finished')) {
      readButton.classList.remove('finished')
      readButton.textContent = 'Incomplete'
    } else {
      readButton.classList.add('finished')
      readButton.textContent = 'Completed'
    }
  })
  bookCard.appendChild(readButton)

  bookshelf.appendChild(bookCard)
}
