/* eslint-disable no-unused-vars */

import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter , Routes,Route } from "react-router-dom";
import Home  from "./components/Pages/Home";
import Login  from "./components/Pages/Login";
import SignUp from "./components/Pages/SignUp";
import AddBook from "./components/Pages/AddBook";
import ListBook from "./components/Pages/ListBook";


function App() {
  return (
    <>
       <BrowserRouter>
       <Navbar/>
       

        <div className="pages">

        
              <Routes>
             
                   <Route path = "/" element = {<Home/>} />
                   <Route path = "/login" element = {<Login/>} />
                   <Route path = "/signup" element = {<SignUp/>} />
                  <Route path = "/addbook" element={<AddBook/>}/>
                 

              </Routes>     
         
        </div>
       {  /*      

  <ListBook />*/ }
        </BrowserRouter>
         
    </>
     
  );
}

export default App;
















/*
import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/Pages/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";

function App() {
  return (
    <Fragment>
      <div className="container">
        <Navbar />
        <Login />

        <Home />
      </div>
    </Fragment>
  );
}
export default App;
*/


