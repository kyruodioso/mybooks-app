const mongoose= require('mongoose');

//url database
const uri= 'mongodb://localhost/api-libros:2707';
const config= {useNewUrlParser:true,useUnifiedTopology:true};


mongoose.connect(process.env.MONGODB_URI
    , config)
.then(db=> console.log('database is run'))
.catch(err=>console.log('error in database'))

module.export = mongoose;