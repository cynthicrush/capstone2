import React, { useContext } from "react";
import UserContext from "./auth/UserContext";
import { Link } from "react-router-dom";

function Homepage() {
    const { currentUser } = useContext(UserContext)

    return (
        <div className="Homepage">
            <div className="container text-center">
                <h1 className="mb-4 font-weight-bold">Jen's Kitchen</h1>
                <p className="lead">Welcome to Jen's Kitchen Chinese Food, what are you hungry for today?</p>
                {currentUser
                    ? <h2>Hi! {currentUser.username}! What are you hungry for today?</h2>
                    :(
                        <p>
                            <Link className="btn btn-primary" to='/login'>Log In</Link>
                            <Link className="btn btn-primary" to='/signup'>Sign Up</Link>
                        </p>
                    )
                }
            </div>
        </div>
    )
}

export default Homepage
