import React, { Component } from "react";
export default class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>
          <div className="ten columns">
            <p className="lead">
              Si te interesa mis servicios, no dudes en contactarme. Te
              contestaré lo antes posible. :)
            </p>
          </div>
        </div>
        <div className="row">
          <div className="eight columns">
            {/* form */}
            <form action method="post" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Nombre <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    size={35}
                    id="contactName"
                    name="contactName"
                  />
                </div>
                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    size={35}
                    id="contactEmail"
                    name="contactEmail"
                  />
                </div>
                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    size={35}
                    id="contactSubject"
                    name="contactSubject"
                  />
                </div>
                <div>
                  <label htmlFor="contactMessage">
                    Mensaje <span className="required">*</span>
                  </label>
                  <textarea
                    cols={50}
                    rows={15}
                    id="contactMessage"
                    name="contactMessage"
                    defaultValue={""}
                  />
                </div>
                <div>
                  <button className="submit">Enviar</button>
                  <span id="image-loader">
                    <img alt src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>{" "}
            {/* Form End */}
            {/* contact-warning */}
            <div id="message-warning"> Error SpaceCowBoy!</div>
            {/* contact-success */}
            <div id="message-success">
              <i className="fa fa-check" />
              Tu mensaje fue enviado, Gracias!
              <br />
            </div>
          </div>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Contacto rápido</h4>
              <p className="address">
                Pedro Batuza
                <br />
                Zapopan, jalisco
                <br />
                <span>(+52) 6692 052676</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
