import React, { useContext } from "react";
import UserContext from "./auth/UserContext";
import { Link } from "react-router-dom";

function Homepage() {
    const { currentUser } = useContext(UserContext)

    return (
        <section id="hero" className="Homepage d-flex align-items-center">
            <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
                <div className="row">
                    <div className="col-lg-8">
                        <h1>Welcome to <span>Jen's Kitchen</span></h1>
                        <h2>What are you hungry for today?</h2>

                        {/* {currentUser
                            ? <h2>Hi! {currentUser.username}! What are you hungry for today?</h2> */}
                            {/* :( */}
                                {/* <p>
                                    <Link className="btn btn-full" to='/dishes'>I'am hungry</Link>
                                    <Link className="btn btn-ghost" to='#'>Show me more</Link>
                                </p> */}
                            {/* ) */}
                        {/* } */}
                        <div className="btns">
                            <Link to='/dishes' className="btn-menu animated fadeInUp scrollto">I am hungry</Link>
                            {/* <a href="#book-a-table" className="btn-book animated fadeInUp scrollto">Book a Table</a> */}
                        </div>
                    </div>
                    {/* <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
                        <a href="#" className="glightbox play-btn"></a>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Homepage
