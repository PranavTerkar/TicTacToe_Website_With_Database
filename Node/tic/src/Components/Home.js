import React from "react";
import "./Home.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    //  navigate to / Register
    navigate("/Register");
  }
  const navigateToLogin = () => {
    //  navigate to / Register
    navigate("/Login");
  };

  return (
    <div className="home">
      <div className="home__title">
        <h3 className="home__async">Async</h3>
        <h1 className="home__main">
          {" "}
          tic tac <br /> toe{" "}
        </h1>
      </div>
      <div className="home__footer">
        <button onClick={navigateToLogin} type="button" className=" home__login btn btn-warning">
          Login
        </button>
        <button onClick={navigateToRegister} type="button" className="home__register btn btn-primary">
          Register
        </button>
      </div>
    </div>
  );
}

export default Home;
