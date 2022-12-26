import React, { useState } from "react";
import { BrowserRouter as Routes, Route, Link } from "react-router-dom";
import "./register.css";

function Login(props) {
  const [values, setValues] = useState({
    name: "",
    usename: "",
    password: "",
  });
  let name, value;

  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <button className="button1">
        {" "}
        <Link to="/">back</Link>{" "}
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
            name="name"
            id="name"
            type="text"
            className="form-control"
            placeholder="Type your first name"
            // onChange={(e) => this.setState({ fname: e.target.value })}
            value={values.name}
            onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <label>Username</label>
          <input
            name="usename"
            id="usename"
            type="text"
            className="form-control"
            placeholder=" Type your username here"
            //   onChange={(e) => this.setState({ lname: e.target.value })}
            value={values.usename}
            onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            name="password"
            id="password"
            type="password"
            className="form-control"
            placeholder="Type your  password here"
            //   onChange={(e) => this.setState({ password: e.target.value })}
            value={values.pass}
            onChange={handleInput}
          />
        </div>
        <div></div>

        <div className="d-grid">
          <Link className="loginbutton" to="/Nogame">
            <button type="button" className=" loginbutton btn btn-warning">
              Login
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
