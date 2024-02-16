import React from "react";
import "./header.css";
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className="header">
            <div className="logo">logo</div>
            <div className="menu">
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about" >About Us</Link></li>
                    <li><Link to="/contact" >Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;