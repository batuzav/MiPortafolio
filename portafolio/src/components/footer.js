import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
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
                  <i className="fa fa-github" />
                </a>
              </li>
            </ul>
            <ul className="copyright">
              <li>© Copyright 2020 Pedro B.</li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
