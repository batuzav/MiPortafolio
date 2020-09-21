import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Inicio
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                Sobre mí
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resumen
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Trabajos
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contacto
              </a>
            </li>
          </ul>{" "}
          {/* end #nav */}
        </nav>{" "}
        {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Pedro Batuza.</h1>
            <h3>
              Soy un <span>Full-Stack Developer</span> y{" "}
              <span>Web Designer</span>, crear herramientas efectivas; la
              funcionalad y la visualidad es mi pasión. Siempre conbinando las
              mejores tecnologías en el desarrollo para realizar la mejor
              version tu Sitio Web.
            </h3>
            <hr />
            <ul className="social">
              <li>
                <a target="_blank" href="https://www.facebook.com/batuzav/">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/derbatuza">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/batuzav/">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://gitlab.com/Batuza">
                  <i className="fab fa-gitlab" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    );
  }
}
