/* eslint-disable jsx-a11y/alt-text */
import React,{ Fragment } from "react";
const ListBook = () => {
    return <Fragment>
        {" "}
        <div>
        <table className="table mt-5 text-center bg-info" >
            <thead>
        <tr>
            <th>book_id</th>
            <th>book_image</th>
            <th>description</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>

        </thead>
        <tbody>
        <tr>
            <td>1</td>
          <td> <img src="../nodeb1.webp" /></td>
          <td>
            ISBNNO: 87543<br />
            Book Name: Node Js in Action Complete Referance<br />
            Cost Rs: 650/-<br />
            <a href="google.com">Download the Ebook</a>
          </td>
         <td> <button className="btn-primary bg-primary">Edit</button></td>
        <td td> <button className="btn-danger bg-danger">Delete</button></td>
        </tr>
        <tr>
            <td>2</td>
          <td><img src="../nodeb2.jfif" /></td>
          <td>
            ISBNNO: 87543<br />
            Book Name: Node Js in Teach Yourself<br />
            Cost Rs: 650/-<br />
            <a href="google.com">Download the Ebook</a>
           
          </td>
          <td> <button className="btn-primary bg-primary">Edit</button></td>
        <td td> <button className="btn-danger bg-danger">Delete</button></td>
        </tr>

        <tr>
            <td>3</td>
          <td><img src="../nodeb3.webp" /></td>
          <td>
            ISBNNO: 654201<br />
            Book Name: Node Up and Running<br />
            Cost Rs: 650/-<br />
            <a href="google.com">Download the Ebook</a>
            
          </td>
          <td> <button className="btn-primary bg-primary">Edit</button></td>
        <td > <button className="btn-danger bg-danger">Delete</button></td>
        </tr>
        </tbody>
      </table>
      </div>
    </Fragment>;
};

export default ListBook;