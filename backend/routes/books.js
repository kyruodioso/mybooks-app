const {Router}= require ('express');
const router= Router();
const fs= require('fs-extra');
const path= require('path');


const Book=require('../models/Book');

router.get('/', async (req,res)=>{
const books = await Book.find().sort('-_id');
res.json(books);
})

router.post('/', async(req, res)=>{
    const{title,author,description,point}=req.body;
    const imagePath ='/uploads/'+req.file.filename;
   const newBook = new Book({title,author,description,point,imagePath});
   console.log(newBook)
   await newBook.save();
    res.json({'message':'received!'});
});

router.delete('/:id', async (req,res)=>{
const book = await Book.findByIdAndDelete(req.params.id);
fs.unlink(path.resolve('./backend/public/' + book.imagePath))
res.json({'message':'received Deleted'})

});

module.exports= router;