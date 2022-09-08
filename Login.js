import { Fragment } from "react";
import Form from "react-bootstrap/Form";

function Login() {
  return (
    <Fragment>
    <div className="container">
      <div className="row text-center">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5">
            <div className="card-body bg-info">
              <div className="panel panel-default text-center">
                <div className="panel-heading">
                  <h1>Online Book Library</h1>

                  <h6>Login to view Book details</h6>
                </div>
                <div className="panel-body">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  

                  <div className="mb-5 ">
                    <button type="submit" className="btn btn-light">
                      Login
                    </button>

                    &nbsp;
                    <button type="submit" className="btn btn-light">
                      Signup
                    </button>
                  </div>
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

export default Login;
