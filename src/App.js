import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Tutorials from "./pages/Tutorials";
import Profile from "./pages/Profile";

const App = ()=>{
  return (
    <Router>
      <Navbar />
     
        <Routes>
           <Route path = '/login' element = {<LoginForm />} />
           <Route path = '/signup' element = {<SignupForm />} />
           <Route path = '/tutorials' element = {<Tutorials />} />
           <Route path = '/profile' element = {<Profile />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App;
