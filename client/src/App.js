import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import AuthorityLogin from './components/AuthorityLogin';
import RaiseComplaints from './components/RaiseComplaints';
import MyComplaints from './components/MyComplaints';
import AllComplaints from './components/AllComplaints';
import ViewComplaints from './components/ViewComplaints';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SolveComplaint from './components/SolveComplaint';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/authority-login" element={<AuthorityLogin />} />
        <Route path="/raise-complaints" element={<RaiseComplaints />} />
        <Route path="/all-complaints" element={<AllComplaints />} />  
        <Route path="/my-complaints" element={<MyComplaints />} />
        <Route path="/view-complaints" element={<ViewComplaints />} />
        <Route path="/solve-complaint" element={<SolveComplaint />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App
