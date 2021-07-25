import React from "react"
import { Link } from "react-router-dom"
const NavBar=()=>(

    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about-us">About Us</Link>
            </li>
            <li>
                <Link to="/articles-list-page">Articles List page</Link>
            </li>
            
        </ul>
    </nav>
)

export default NavBar;