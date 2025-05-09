import React from "react";

function Footer(){
    return(
        <footer className="footer__container">
            <div className="footer__nav">
                <ul className="footer__links">
                    <li className="footer__links-item">
                        <a href="" className="footer__links-link">About</a>
                    </li>
                    <li className="footer__links-item">
                        <a href="" className="footer__links-link">Projects</a>
                    </li>
                    <li className="footer__links-item">
                        <a href="" className="footer__links-link">Contact</a>
                    </li>
                    <li className="footer__links-item">
                        <a href="https://github.com/dineboro" className="footer__links-link">Github</a>
                    </li>
                </ul>
            </div>
            <div className="footer__content">
                <ul className="footer__socials">
                    <li className="footer__socials-item"><a href="" className="footer__socials-link">
                        {/* paste svg */}
                        Facebook</a></li>
                    <li className="footer__socials-item"><a href="" className="footer__socials-link">
                                {/* paste svg */}
                                Instagram</a></li>
                    <li className="footer__socials-item"><a href="" className="footer__socials-link">
                                {/* paste svg */}
                                LinkedIn</a></li>
                    <li className="footer__socials-item"><a href="" className="footer__socials-link">
                                {/* paste svg */}
                                Email</a></li>
                </ul>
            </div>
            
        </footer>
    )
}

export default Footer;