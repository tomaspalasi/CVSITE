import React from "react";
import logo from '../img/tjp-logo.png'
import linked from '../img/linkedin-logo.png'
import github from '../img/github-logo.png'
import '../styles/style.scss'
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <div className="tjpLogo">
                <Link to={'/'}>
                    <img className="logoTjp" src={logo} alt="logo"/>
                </Link>
            </div>
            <div className="redes">
                <Link to= '/portfolio' className="portfolio">PORTFOLIO</Link>
                <a href="https://www.linkedin.com/in/tomas-palasi-44810b251/" target="_blank" rel="noreferrer">
                    <img className="logoLinked" src={linked} alt="linked-logo" />
                </a>
                <a href="https://github.com/tomaspalasi/" target="_blank" rel="noreferrer">
                    <img className="logoGithub" src={github} alt="github-logo" />
                </a>
            </div>
        </div>
    )
}

export default Header;