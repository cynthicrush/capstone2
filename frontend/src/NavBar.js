import React, { useContext } from "react";
import {Link, NavLink } from 'react-router-dom'
import UserContext from "./auth/UserContext";

function NavBar({ logout }) {
    const { currentUser } = useContext(UserContext)
    
    return(
        <nav className="NavBar navbar navbar-expand-md">
            <Link className="Navbar-brand" to='/'>
                Jen's Kitchen
            </Link>
            {currentUser
                ? <ul className="navbar-nav ml-auto">
                    <li className='nav-item mr-4'>
                        <NavLink className="nav-link" to='/profile'>
                            {currentUser.username}
                        </NavLink>
                    </li>
                    <li className='nav-item mr-4'>
                        <NavLink className="nav-link" to='/dishes'>
                            Dishes
                        </NavLink>
                    </li>
                    <li className='nav-item mr-4'>
                        <NavLink className="nav-link" to='/' onClick={logout}>
                            Log Out {currentUser.username}
                        </NavLink>
                    </li>
                </ul>
                : <ul className="navbar-nav ml-auto">
                    <li className='nav-item mr-4'>
                        <NavLink className="nav-link" to='/login'>
                            Log In
                        </NavLink>
                        <li className='nav-item mr-4'>
                        <NavLink className="nav-link" to='/signup'>
                            Sign Up
                        </NavLink>
                    </li>
                    </li>
                </ul>
            }
        </nav>
    )
}

export default NavBar
