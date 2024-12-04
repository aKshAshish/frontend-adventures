import React from "react";
import { Link } from "react-router-dom";

import logo from '../assets/logo.png';
import Searchbar from "./Searchbar";

const Navbar = () => {
    return (
        <div class="navbar">
            <Link to={"/"} style={{display: "flex", alignItems: "center"}}>
                <img src={logo} alt="logo" height={45} />
            </Link>
            <Searchbar />
        </div>
    );
}

export default Navbar;