if(process.env.NODE_ENV !== 'production'){
require('dotenv').config();
}

const express = require ('express');
const app= express();
const morgan = require('morgan');
const cors= require('cors');
const multer = require('multer');
const path=require('path');

const {mongoose} = require('./database');
const router = require ('./routes/books');


//settings
app.set('port',process.env.PORT || 3000);


//Middlewares
app.use(morgan('dev'));
app.use(cors());
const storage = multer.diskStorage({
    destination:path.join(__dirname, 'public/uploads'),
    filename(req,file,cb){
        cb(null, new Date().getTime()+ path.extname(file.originalname));
    }
});
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use('/api/books',router);

//static
app.use(express.static(path.join(__dirname,'public')));

//server run
app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`);
})


