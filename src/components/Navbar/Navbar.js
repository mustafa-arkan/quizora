import React from 'react';
import { Link } from 'react-router-dom';




const Navbar = () => {



    return (

<nav className="navbar navbar-expand-lg bg-light container sticky-top">
  <div className="container-fluid">
  <h3>Quizzoraa</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      
      <ul className="navbar-nav justify-content-between mx-5   ">
        <li className="nav-item mx-auto">
        <Link className="nav-link active " to='/home'>Home</Link>
        </li>
        
        <li className="nav-item">
        <Link  className="nav-link active" to='/statics'>Statistics</Link>
        </li>
        <li className="nav-item dropdown">
        <Link  className="nav-link active"  to='/blog'>Blog</Link>
        </li>
      </ul>




      
    </div>
  </div>
</nav>

       
    );
};

export default Navbar;