/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment,useState } from "react";
import ListBook from "./ListBook";

const AddBook = () =>{
    
    const [book_image,setImage] =useState("");
    const [description,setDescription] = useState("");
    const onSubmitForm =  async(e) =>{
        e.preventDefault();
        try {
            const body = { description };
            const response= await fetch("http://localhost:5000/books",{method:"POST",
        headers: {"Content-Type": "application/json"},body: JSON.stringify(body)
    
    });
    console.log(response);
        } catch (err) {
            console.error(err.message)
            
        }
    }
    return(

        <Fragment>
     <h1 className="text-center mt-5">Add Book Details</h1>
    <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <img type="bytea" src="node1.webp" alt="..im" className="img-control" value={book_image} 
        onChange={e =>setImage(e.target.value)}></img>
        <input type="text" className="form-control" value={description} 
        onChange={e =>setDescription(e.target.value)}/>
        <button className="btn btn-success">Add</button>
    </form>
   <ListBook />
    </Fragment>
     )
};
export default AddBook;