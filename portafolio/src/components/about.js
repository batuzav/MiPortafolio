import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt />
          </div>
          <div className="nine columns main-col">
            <h2>Sobre mí</h2>
            <p>
              Responsable y constante en mi trabajo, así como de rápido
              aprendizaje. Habilidad para trabajar bajo presión, pensamiento
              analítico y creativo para resolución de problemas críticos,
              dispuesto al trabajo en equipo además de colaborar con la
              filosofía de la empresa, mi principal interés es el aprendizaje
              constante que me ayuden a crecer personal y profesionalmente.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Detalles de contacto:</h2>
                <p className="address">
                  <span>Pedro Valdez</span>
                  <br />
                  <span>Zapopan, Jalisco</span>
                  <br />
                  <span>(+52) 6692 052676</span>
                  <br />
                  <span>pedro@batuzav.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button">
                    <i className="fa fa-download" />
                    Descarga mi CV.
                  </a>
                </p>
              </div>
            </div>{" "}
            {/* end row */}
          </div>{" "}
          {/* end .main-col */}
        </div>
      </section>
    );
  }
}
