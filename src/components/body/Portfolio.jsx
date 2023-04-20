import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import benoniTeam from "../img/benoni-team.png";
import benoniApp from "../img/benoni-app.png";
import "../styles/style.scss";

const Portfolio = () => {
  return (
    <div className="cv-site-1">
      <div className="cv-site">
        <Header />
        <hr />
        <div className="portfolioBody">
            <div className="benoniTeamBody">
                <h2 className="tituloBtg">Sitio web Benoni Team GYM</h2>
                <a href="https://benoniteamgym.netlify.app/" target="_blank" rel="noreferrer">
                    <img src={benoniTeam} className="benoniTeam" alt="benoniTeam" />
                </a>
            </div>
            <div>
                <h2 className="tituloBte">E-Commerce Benoni Team GYM</h2>
                <a href="https://benoni-team-ecommerce.netlify.app/" target="_blank" rel="noreferrer">
                    <img src={benoniApp} className="benoniApp" alt="benoniTeam" />
                </a>
          </div>
        </div>
        <hr />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
