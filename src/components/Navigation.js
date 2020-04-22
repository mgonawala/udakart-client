import React from 'react';
import {LinkContainer} from 'react-router-bootstrap'
import {NavItem} from 'react-bootstrap';

export default function Navigation({isAuthenticated, handleLogout, cartItems}) {
  return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Udakart App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {isAuthenticated?
            <>
              <LinkContainer to={"/"} >
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
              </LinkContainer>

                <li className="nav-item">
                  <a className="nav-link" href="/" onClick={handleLogout}>Logout</a>
                </li>


              <LinkContainer to={"/cart"}>
                <li className="nav-item">

                    <a className="nav-link" href="/">
                        Cart <span className="badge badge-success">{cartItems.length}</span>
                    </a>
                </li>
              </LinkContainer>
            </>
            :
            <>
            <LinkContainer to={"/login"}>
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
            </LinkContainer>

            <LinkContainer to={"/signup"}>
              <li className="nav-item">
                <a className="nav-link" href="/">Sign Up</a>
              </li>
            </LinkContainer>
            </>
            }

          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
  );
}
