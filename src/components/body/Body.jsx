import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ModalCv from "./modal/ModalCv";
import ModalContact from "./modal/ModalContact";
import ModalCert from "./modal/ModalCert";

const Body = () => {

  return (
    <div className="cv-site-1">
      <div className="cv-site">
        <Header />
        <hr />
        <div className="body">
          <div className="textBody">
            <h1 className="name">Tomás Julián Palasi</h1>
            <h2 className="degree">Desarrollador Web Frontend ReactJS</h2>
            <h3 className="description">
              En noviembre del año 2022, logré recibirme en la carrera de
              <strong> Desarrollo Web Frontend React JS</strong>, en <strong>Coderhouse</strong>. Actualmente, me
              encuentro cursando la carrera de <strong>Diseño Industrial</strong>, en la 
              <strong> Universidad de Palermo</strong>. Me considero una persona <strong>proactiva</strong> y
              <strong>creativa</strong>, dispuesto a seguir capacitándome en diferentes áreas que
              me permiten expandir mis conocimientos, tanto a nivel profesional,
              como personal. La clara <strong>comunicación</strong>, el <strong>trabajo en equipo</strong> y la
              buena <strong>adaptabilidad a los cambios</strong>, forman parte de mis <strong>fortalezas</strong>.
            </h3>
          </div>
          <div className="buttonsBody">
            <ModalCv/>
            <ModalCert/>
            <ModalContact/>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Body;
