import React, { useContext } from "react";
import {Link, NavLink } from 'react-router-dom'
import UserContext from "./auth/UserContext";

function NavBar({ logout }) {
    const { currentUser } = useContext(UserContext)
    return(
        <header id="header" className="NavBar fixed-top d-flex align-items-cente">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
                <h1 className="logo me-auto me-lg-0">
                    <Link to='/'>
                        Jen's Kitchen
                    </Link>
                </h1>
                
                <nav id="navbar" className="navbar order-last order-lg-0">
                
                    {!currentUser
                        ? 
                        <ul>
                            <li><a className="nav-link scrollto" href="/">Home</a></li>
                            <li><a className="nav-link scrollto" href="/dishes">Dishes</a></li>
                            <li><a className="nav-link scrollto" href="/login">Log In</a></li>
                            <li><a className="nav-link scrollto" href="/signup">Sign Up</a></li>
                        </ul>
                        :
                            <ul>
                                <li><a className="nav-link scrollto" href="/">Home</a></li>
                                <li><a className="nav-link scrollto" href="/dishes">Dishes</a></li>
                                <li><a className="nav-link" href="/" onClick={logout}>Log Out {currentUser.username}</a></li>
                            </ul>
                    }
                    
                
                </nav>
            </div>
        </header>
    )
}

export default NavBar
