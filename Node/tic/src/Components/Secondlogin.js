import React from "react";
import "./secondlogin.css";
import { BrowserRouter as Routes, Route, Link } from "react-router-dom";

function Secondlogin() {
  return (
    <div>
      <button className="button1">
        {" "}
        <Link to="/Nogame">back</Link>{" "}
      </button>
      <h6 className="secondlogin__title1">Start a new game</h6>
      <h1 className="secondlogin__title2">
        Whom do you want <br /> to play with
      </h1>
      <div className="mb-3">
        <label className="lable">
          <b>Email</b>
        </label>
        <input
          type="text"
          className="form-control"
          placeholder=" Type their email here"
          //   onChange={(e) => this.setState({ lname: e.target.value })}
        />
      </div>
      <div className="d-grid">
        <Link to="/Board">
          <button type="button" className=" button btn btn-warning">
            Start game
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Secondlogin;
