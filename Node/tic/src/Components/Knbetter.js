import React from "react";
import { BrowserRouter as Routes, Route, Link } from "react-router-dom";

function Knbetter() {
  return (
    <div>
      <div>
        <button className="button1">
          {" "}
          <Link to="/Register">back</Link>{" "}
        </button>
        <form className="form">
          <h6>Create account</h6>
          <h3>
            Let's get to know <br />
            you better!
          </h3>

          <div className="mb-3">
            <label>Your name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Type your first name"
              //   onChange={(e) => this.setState({ fname: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder=" Type your username here"
              //   onChange={(e) => this.setState({ lname: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Type your  password here"
              //   onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>

          <div className="d-grid">
            <Link to="/Knbetter">
              <Link to="/Login">
                <button type="button" className=" button btn btn-warning">
                  Register
                </button>
              </Link>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Knbetter;
