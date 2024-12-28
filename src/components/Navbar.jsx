import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">CodeGram</h1>
        <div>
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/tutorials" className="mx-2">Tutorials</Link>
          <Link to="/opensource" className="mx-2">Open Source</Link>
          <Link to="/login" className="mx-2">Login</Link>
          <Link to="/signup" className="mx-2">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
