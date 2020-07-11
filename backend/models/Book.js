const {Schema, model }= require ('mongoose');

const BooksSchema = new Schema({
    title:{type:String,require:true},
    author:{type:String, require:true},
    description:{type:String, require:true},
    imagePath:{type:String},
    point: {type:Number , require: true},
    created:{type:Date , default: Date.now}
});

module.exports= model('Book', BooksSchema);
