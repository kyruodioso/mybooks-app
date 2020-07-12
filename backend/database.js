const mongoose= require('mongoose');




mongoose.connect(process.env.MONGODB_URI, config)
.then(db=> console.log('database is run'))
.catch(err=>console.log('error in database'))

//module.export = mongoose;