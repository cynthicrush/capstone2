import React, { Component } from "react";

class Footer extends Component {
    render() {
        return(
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6">
                                <div className="footer-info">
                                    <h3>Jen's Kitchen</h3>
                                    <p>
                                        10403 N 118th E Ave <br />
                                        Owasso OK 74055, USA<br /><br />
                                        <strong>Phone:</strong> +1 9299906666<br />
                                        <strong>Email:</strong> jennifer@email.com<br />
                                    </p>
                                    <div className="social-links mt-3">
                                        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Jen's Kitchen</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/dishes">dishes</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Service One</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Service Two</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Service Three</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Service Four</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Service five</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Our Newsletter</h4>
                                <p>Thanks for subscribing us!</p>
                                <form action="" method="post">
                                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                </form>

                            </div>

                        </div>
                    </div>
                    </div>

                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Jen's Kitchen</span></strong>. All Rights Reserved
                    </div>
                    {/* <div className="credits">
                    
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div> */}
                </div>
            </footer>
        )
    }
}

export default Footer