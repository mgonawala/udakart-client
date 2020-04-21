import React,{useState} from 'react';
import {Navbar, Nav, NavItem, Form, FormControl, Button} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';
import Routes from "./Routes";
import "./App.css";
import {AppContext} from "./lib/contextLib";

export default function App(){

  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState();

  function handleLogout() {
    userHasAuthenticated(false);
    setAuthToken('');
  }

  return(
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
          <Navbar.Brand>
            <Link to={"/"}>Udakart App</Link>
          </Navbar.Brand>
          </Navbar.Header>

          <Navbar.Collapse>

            <Nav className={"mr-auto"} pullRight>

              {isAuthenticated ?
              <>
              <LinkContainer to={"/logout"}>
                <NavItem onClick={handleLogout}>Logout</NavItem>
              </LinkContainer>
              </>
              :
              <>
                <LinkContainer to={"/login"}>
                  <NavItem >Login</NavItem>
                </LinkContainer>
                <LinkContainer to={"/signup"}>
                  <NavItem >Sign Up</NavItem>
                </LinkContainer>
              </>

              }


            </Nav>
            <Form inline className={"inlineform"}>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>

        </Navbar>

        <AppContext.Provider value={{isAuthenticated, userHasAuthenticated,authToken, setAuthToken}}>
        <Routes/>
        </AppContext.Provider>
      </div>
  );
}