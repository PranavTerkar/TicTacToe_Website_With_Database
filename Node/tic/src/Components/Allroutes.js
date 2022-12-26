import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Nogame from './Nogame';
import Secondlogin from './Secondlogin';
import Knbetter from './Knbetter';
import Board from './Board';

function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Register" element={<Register />} />
      <Route path="Login" element={<Login />} />
      <Route path="Nogame" element={<Nogame />} />
      <Route path="Secondlogin" element={<Secondlogin />} />
      <Route path="Knbetter" element={<Knbetter />} />
      <Route path="Board" element={<Board />} />

    </Routes>
  )
}

export default Allroutes
