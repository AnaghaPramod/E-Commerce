//import mongoose
const mongoose = require('mongoose');

//define the conection string
mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log('connected to mongodb');
})

//create a model for the products
const Product = mongoose.model('Product',{
    //schema creation
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})


//create a new collection in mongodb - create a model
const Wishlist = mongoose.model('wishlist',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String
})

module.exports={
    Product,
    Wishlist
}