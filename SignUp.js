import { Fragment } from "react";
//  import Form from "react-bootstrap/Form";

function SignUp() {
  return (
    <Fragment>
<div className="container-fluid " >
               <div className="row text-center">
 <div className="col-md-6 offset-md-3">
           <div className="card mt-5">
             <div className="card-body bg-info" >
            <div className="panel panel-default text-center">
                <div className="panel-heading">
                <h1>Online Book Library</h1>

                <h6 className="mb-3">Signup</h6>
                </div>
                <div className="panel-body" >
                <form className="form-horizontal col-sm-12 col-md-12" >
					 <div className="mb-1">
					    UserName : &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; <input type="text" /> 
                    </div>
                    <div className="mb-1">
					    Password :  &nbsp;  &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   <input type="password" />
                    </div>
                    <div className="mb-1">
					    Confirm Password :<input type="password" />
                        </div>
                        <div className="mb-1">
					    Address :  &nbsp; &nbsp;  &nbsp;   &nbsp; &nbsp; &nbsp; &nbsp;  <input type="text" />
                        </div>
					
                        <div className="mb-2">
					  <button type="submit" className="btn btn-light">Register</button>
                      
                    </div>
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

export default SignUp;