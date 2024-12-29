import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

const App = ()=>{
  return (
    <Router>
      <Navbar />
     
        <Routes>
           <Route path = '/login' element = {<LoginForm />} />
           <Route path = '/signup' element = {<SignupForm />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App;
