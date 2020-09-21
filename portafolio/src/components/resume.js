import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    return (
      <section id="resume">
        {/* Education
----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Educación</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>CBTIS No.51</h3>
                <p className="info">
                  Bachiller <span>•</span> <em className="date">2012 - 2015</em>
                </p>
                <p>
                  Técnico en programación. Centro de Bachillerato Tecnológico
                  industrial y de servicios No. 51 (Técnico en Programación)
                  (Titulo obtenido).
                </p>
              </div>
            </div>{" "}
            {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Universidad Politécnica de Sinaloa </h3>
                <p className="info">
                  Universidad <span>•</span>{" "}
                  <em className="date">2015 - 2018</em>
                </p>
                <p>Titulo obtenido como Ingeniero en Informática.</p>
              </div>
            </div>{" "}
            {/* item end */}
          </div>{" "}
          {/* main-col end */}
        </div>{" "}
        {/* End Education */}
        {/* Work
----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Trabajos</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>SITIO RANDOM</h3>
                <p className="info">
                  Programador <span>•</span> <em className="date">2018-2019</em>
                </p>
                <p>
                  Desarrollo de sistemas web enlos frameworks (Node.JS, Laravel,
                  AngularJS, jQuery, AJAX), Gestion de servidores con sistema
                  operativo Linux, realización de aplicaciones nativas (React
                  Native)
                </p>
              </div>
            </div>{" "}
            {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>HOPPERCAT</h3>
                <p className="info">
                  Desarrollador WEB <span>•</span>{" "}
                  <em className="date">2019 - 2020</em>
                </p>
                <p>
                  Desarrollo de sistemas web en los frameworks (NodeJS, Laravel,
                  AngularJS, jQuery, React, GraphQL), Desarrollos y
                  mantenimiento de páginasweb conWordPress. Cursos de
                  Javascript, GraphQLy Laravel.
                </p>
              </div>
            </div>{" "}
            {/* item end */}
          </div>{" "}
          {/* main-col end */}
        </div>{" "}
        {/* End Work */}
        {/* Skills
----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Tecnologías</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <p>
              He trabajado con diversas tecnologías, sin embargo, estas son con
              las que más cómodo me siento trabajando y con las que he podido
              desarrollar un mayor conocimiento a lo largo de mis trabajos.
            </p>
            <div className="bars">
              <ul className="skills">
                <li>
                  <span className="bar-expand photoshop" />
                  <em>Photoshop</em>
                </li>
                <li>
                  <span className="bar-expand illustrator" />
                  <em>Laravel</em>
                </li>
                <li>
                  <span className="bar-expand wordpress" />
                  <em>Wordpress</em>
                </li>
                <li>
                  <span className="bar-expand css" />
                  <em>NodeJS</em>
                </li>
                <li>
                  <span className="bar-expand html5" />
                  <em>React Native</em>
                </li>
                <li>
                  <span className="bar-expand jquery" />
                  <em>React</em>
                </li>
              </ul>
            </div>
            {/* end skill-bars */}
          </div>{" "}
          {/* main-col end */}
        </div>{" "}
        {/* End skills */}
      </section>
    );
  }
}
