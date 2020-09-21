import React, { Component } from "react";
export default class Intro extends Component {
  render() {
    return (
      <section id="intro">
        <div className="intro-overlay" />
        <div className="intro-content">
          <div className="row">
            <div className="col-twelve">
              <h5>Hello, World.</h5>
              <h1>Soy Pedro Batuza.</h1>
              <p className="intro-position">
                <span>Full-Stack Developer</span>
                <span>UI/UX Designer</span>
              </p>
              <a className="button stroke smoothscroll" href="#about" title>
                Más sobre mí
              </a>
            </div>
          </div>
        </div>{" "}
        {/* /intro-content */}
        <ul className="intro-social">
          <li>
            <a href="https://www.facebook.com/batuza">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/batuzav/">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/derbatuza">
              <i className="fa fa-instagram" />
            </a>
          </li>
        </ul>{" "}
        {/* /intro-social */}
      </section>
    );
  }
}
