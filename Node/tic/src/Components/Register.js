import React, { useState } from "react";
import "./register.css";
import { BrowserRouter as Routes, Route, Link } from "react-router-dom";

function Register(props) {
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
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
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Type your first name"
            value={values.name}
            onChange={handleInput}
            //   onChange={(e) => this.setState({ fname: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
            placeholder=" Type your username here"
            value={values.username}
            onChange={handleInput}
            //   onChange={(e) => this.setState({ lname: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Type your  email here"
            value={values.email}
            onChange={handleInput}
            //   onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Type your  password here"
            value={values.password}
            onChange={handleInput}
            //   onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div className="d-grid">
          <Link to="/Knbetter">
            <button type="button" className=" loginbutton btn btn-warning">
              Register
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
