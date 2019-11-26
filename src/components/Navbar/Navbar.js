import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => (
  <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        ImageViewer
      </a>

      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">Home</Link>
        <Link className="navbar-item" to="/local-collection">Local collection</Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a className="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
)