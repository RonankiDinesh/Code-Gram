import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";

const App = ()=>{
  return (
    <Router>
      <Navbar />
     
        <Routes>
           <Route path = '/login' element = {<LoginForm />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App;
