import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/menu">Menu</a></li>
                            <li><a href="/contactus">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope fa-lg"></i>: 
                            <a href="mailto:confusion@food.net"> confusion@food.net</a>
                        </address>
                    </div>

                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google"
                               href="http://google.com/+" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-google-plus"></i>
                            </a>
                            <a className="btn btn-social-icon btn-facebook"
                               href="http://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a className="btn btn-social-icon btn-linkedin"
                               href="http://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a className="btn btn-social-icon btn-twitter"
                               href="http://twitter.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a className="btn btn-social-icon btn-youtube"
                               href="http://youtube.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-youtube"></i>
                            </a>
                            <a className="btn btn-social-icon"
                               href="mailto:confusion@food.net">
                                <i className="fa fa-envelope-o"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© {new Date().getFullYear()} Ristorante Con Fusion</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
