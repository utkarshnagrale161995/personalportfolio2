import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Header from './component/Header';
import Professional from './component/Professional';
import Academics from './component/Academics';
import Certification from './component/Certification';
import Project from './component/Project'
import Newcontact from './component/NewContact';
import "bootstrap/dist/css/bootstrap.css";
import About from './component/About';

function App() {
  return (
    <div>
      
      <BrowserRouter basename='/personalportfolio2'>
      <Header />
      <Routes>
        <Route path="/personalportfolio2" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/academics" element={<Academics/>}/>
        <Route path="/professional" element={<Professional/>}/>
        <Route path="/project" element={<Project/>} />
        <Route path="/certification" element={<Certification/>}/>  
        <Route path="/newcontact" element={<Newcontact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

