import BookService from './services/BookService';
const bookService = new BookService();
import {format} from 'timeago.js'

class UI{

   async renderBooks(){
    const books= await  bookService.getBooks();
    const booksCardContainer= document.getElementById('books-cards');
    booksCardContainer.innerHTML='';
    books.forEach((book)=>{
      const div =  document.createElement('div');
      div.className='';
      div.innerHTML = `
      <div class="card m-2">
      <div class="row no-gutters">
          <div class="col-md-4">
              <img src="${book.imagePath}" class="img-fluid" alt="">
          </div>
        <div class="col-md-8">
        <div class="card-block px-2">
        <h4 class="card-title">${book.title}</h4>
        <p class="card-text">${book.author}</p>
        <p class="card-text">${book.description}</p>
        <p class="card-text">${book.point} Stars</p>
        <a href="#" class="btn btn-danger btn-lg btn-block delete" _id="${book._id}">Delete</a>
        </div>
        </div>
            </div>
            <div class="card-footer w-100 text-muted">${format(book.created)} </div>
      </div>
      `;
      booksCardContainer.appendChild(div);
    });
    }

   async addANewBook(book){
     await   bookService.postBook(book);
     this.renderBooks();
     this.clearBookForm();
    }

    clearBookForm(){
        document.getElementById('book-form').reset();
    }
    
    renderMessage(message, colorMessage, secondsToRemove){
            const div = document.createElement('div');
            div.className=`alert alert-${colorMessage} message`;
            div.appendChild(document.createTextNode(message))

            const container=document.querySelector('.col-md-4');
            const bookForm=document.querySelector('#book-form');

            container.insertBefore(div,bookForm);
            setTimeout(()=>{
              document.querySelector('.message').remove();
            },secondsToRemove)

    }

   async deleteBook(bookId){
    await bookService.deleteBook(bookId);
    this.renderBooks()
   }

}

export default UI;