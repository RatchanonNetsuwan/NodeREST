//Description : REST API  with MongoDB
//npm install express mongoose body-parser
//Run this file with node MongoDBREST.js
//Test with Postman

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


// const dbUrl = 'postgres://webadmin:AQMhrf56257@node57034-ratchanon-noderest.proen.app.ruk-com.cloud/Books'

mongoose.connect(
    "mongodb://admin:QHSqbd80319@node57037-ratchanon-noderest.proen.app.ruk-com.cloud:11851",
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    }
);


//define the Book model
const Book = mongoose.model('book' ,{
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        required: true
    },
    title: String,
    author: String,
});

const app = express();
app.use(bodyParser.json());

//route to create a new book
app.post('/books' , async (req , res) => {
    try{
        //Get the last book record to determine the next Id
        const lastBook = await Book.findOne().sort({id : -1});
        const nextId = lastBook ? lastBook.id + 1 : 1;

        //Create a new book with the next ID
        const book = new Book({
            id: nextId, //Set the custom "id" find id
            ...req.body,
        });

        await book.save();
        res.send(book);
    }catch (error){
        res.status(500).send(error)
    }
});

//route to get all books
app.get('/books' , async(req , res) => {
    try{
        const book = await Book.findOne({id:req.params.id})
        res.send(book);
    }catch(error){
        res.status(500).send(error);
    }
});

//route to get a book by id
app.get('/books/:id' , async(req , res)=> {
    try{
        const book = await Book.findOne({id:req.params.id});
            res.send(book);
        }catch(error){
            res.status(500).send(error);
        }
});

//route to update a book
app.put('/books/:id' , async(req , res) => {
    try{
        const book = await Book.findOneAndUpdate({id:params.id} , req.body,{
            new: true,
        });
        res.send(book);
    }catch(error){
        res.status(500).send(error);
    }
});

//route to delete a book
app.delete('/books/:id' , async(req , res) => {
    try{
        const book = await Book.findOneAndDelete({id:req.params.id});
        res.send(book);
    }catch(error){
        res.status(500).send(error);
    }
});

//start the server
const port = process.env.PORT || 3000;
app.listen(port , () => {console.log(`Listening on port ${port}...`)});