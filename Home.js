/*eslint-disablejsx-a11y/no-redundant-roles*/

import React,{Fragment}from"react";

function Home(){
return(
<Fragment>
<div className="container-fluid" >
 <div className="row text-center">
 <div className="col-md-6 offset-md-3">
           <div className="card mt-5">
             <div className="card-body bg-info"  >
            <div className="panel panel-default text-center">
                <div className="panel-heading">
                <h1>Online Book Library</h1>

                <h6>Welcome to Online Book Library!</h6>
                </div>
                <div className="panel-body" >
                <form  className="form-horizontal col-sm-12 col-md-12" >
                   <p>
                    Using Online Book Liabrary you will be able to view books online and download ebooks.
                    Also you will be able to get suggestion about the books by using the chat option . 
                    So why are you waiting for? Signup and login to the application!
                   </p>
                   <a href="Login">Click here</a>
        
					  
				</form>
                </div>
                </div>
                </div>
            </div>
     </div>
     </div>
     </div>   
</Fragment>
);
}

export default Home;
