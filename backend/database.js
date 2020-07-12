const mongoose= require('mongoose');

//url database
const config= {useNewUrlParser:true,useUnifiedTopology:true};


mongoose.connect(process.env.MONGODB_URI, config)
.then(db=> console.log('database is run'))
.catch(err=>console.log('error in database'))

