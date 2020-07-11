
import './styles/app.css';

import UI from './UI';

document.addEventListener('DOMContentLoaded',()=>{
    const ui= new UI();
    ui.renderBooks()
})

document.getElementById('book-form')
.addEventListener('submit',e=>{
 const title =document.getElementById('title').value;
 const author =document.getElementById('author').value;
 const description =document.getElementById('description').value;
 const point= document.getElementById('point').value;
 const image = document.getElementById('image').files;

 const formData =new FormData();
 formData.append('image',image[0])
 formData.append('title',title);
 formData.append('author',author);
 formData.append('description',description);
 formData.append('point',point);

 const ui = new UI();
 ui.addANewBook(formData);

 ui.renderMessage('New Book Added', 'success',3000);

 e.preventDefault();
})

document.getElementById('books-cards')
.addEventListener('click',e=>{
    const ui =new UI();
if(e.target.classList.contains('delete')){
ui.deleteBook(e.target.getAttribute('_id'));
ui.renderMessage('Book Removed','danger', 3000);
}
e.preventDefault()
})