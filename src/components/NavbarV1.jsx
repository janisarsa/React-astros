import React from "react";
import "./NavbarV1.css";


const Navbar = ()=>{
    
    return(
        <div className="navbar--container">
            <div className="navbar--title">
                <h1>Navbar </h1>
            </div>
            <div className="navbar--links">
                <div className="navbar--link">
                    <a href="">Home</a>
                </div>
                <div className="navbar--link">
                    <a href="">About</a>
                </div>
                <div className="navbar--link">
                    <a href='/'>Astros</a>
                </div>
            </div>
        </div>
    )
};

export default Navbar;