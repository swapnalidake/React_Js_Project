const express = require("express");
const app = express();
const cors = require("cors");
const pool =require("./db");
//Middlware
app.use(cors());
app.use(express.json());

//Routes

//create a book
app.post("/books",async(req,res) => {
    try{
    const {book_image} =req.body;
    const { description} = req.body;
    const newBook = await pool.query("INSERT INTO book(book_image,description)VALUES($1,$2) RETURNING * " ,[book_image,description]);
    res.json(newBook.rows[0]);
    }catch(err){
      console.error(err.message);
    }
});
//get all books
app.get("/books",async(req,res) => {
 try{
  const allBooks= await pool.query("SELECT * FROM book");
  res.json(allBooks.rows);
 }catch(err){
    console.error(err.message);
 }

});

//get book
app.get("/books/:id",async(req,res)=> {
    try{
   const {id} = req.params;
   const book = await pool.query("SELECT * FROM book WHERE book_id = $1",[id]);
   res.json(book.rows[0]);
    }catch(err){
    console.error(err.message);
    }
});

//update a book
app.put("/books/:id", async(req,res) =>{
    try {
    const {id} = req.params;
    const {book_image} =req.body;
    const { description} = req.body;
    const updateBook = await pool.query("UPDATE book SET description =$1 WHERE book_id = $2",[description,id]);
    res.json("Book was update");
    } catch (err) {
    console.error(err.message); 
    }
});

//delete a todo
app.delete("/books/:id",async(req,res) =>{
    try {
        const {id}=req.params;
        const deleteBook =await pool.query("DELETE FROM book WHERE book_id = $1",[id]);
        res.json("Book was deleted");
    } catch (err) {
        console.error(err.message); 
    }
});




app.listen(5000,() => {
    console.log("server has started on port 5000");
});