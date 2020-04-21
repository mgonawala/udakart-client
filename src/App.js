import React from 'react';
import {Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom';
import Routes from "./Routes";
import "./App.css";

export default function App(){
  return(
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
          <Navbar.Brand>
            <Link to={"/"}>Udakart App</Link>
          </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Routes/>
      </div>
  );
}