const book = document.querySelector('.book');
const bookControl = document.querySelector('.book__control');
const fontSizes = document.querySelectorAll('.font-size');

function changeFontSize(event) {
  if (event.target.dataset.size === 'small') {
    book.classList.add('book_fs-small');
    book.classList.remove('book_fs-big');
  } else if (event.target.dataset.size === 'big') {
    book.classList.add('book_fs-big');
    book.classList.remove('book_fs-small');
  } else {
    book.classList.remove('book_fs-small');
    book.classList.remove('book_fs-big');
  }

  for (let fontSize of fontSizes) {
    fontSize.classList.remove('font-size_active');
  }

  event.target.classList.add('font-size_active');
  event.preventDefault();
}


for (let link of bookControl.children) {
  link.addEventListener('click', changeFontSize);
};