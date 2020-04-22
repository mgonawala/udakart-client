import React,{useState, useEffect} from 'react';
import {Navbar, Nav, NavItem, Form, FormControl, Button} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import Routes from "./Routes";
import "./App.css";
import {AppContext} from "./lib/contextLib";
import {verifyToken} from "./auth/Auth";
import Navigation from "./components/Navigation";

export default function App(){

  const history = useHistory();
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [authToken, setAuthToken] = useState();

  useEffect(() => {
    onLoad()
  },[]);
  
  async function onLoad() {

    const result = await verifyToken(localStorage.getItem('authToken'))
    if(result){
      userHasAuthenticated(true);
      setAuthToken(localStorage.getItem('authToken'));
    }
    setIsAuthenticating(false);
  }
  function handleLogout() {
    userHasAuthenticated(false);
    localStorage.removeItem('authToken');
    setAuthToken('');
    history.push('/login');
  }

  return(
    !isAuthenticating &&
      <div className="App container">
       <Navigation isAuthenticated={isAuthenticated} handleLogout={handleLogout} cartItems={cartItems}/>

       {/* <Navbar fluid collapseOnSelect>
          <Navbar.Header>
          <Navbar.Brand>
            <Link to={"/"}>Udakart App</Link>
          </Navbar.Brand>
          </Navbar.Header>

          <Navbar.Collapse>

            <Nav className={"mr-auto"} pullRight>

              {isAuthenticated ?
              <>

                <NavItem onClick={handleLogout}>Logout</NavItem>

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

        </Navbar>*/}

        <AppContext.Provider value={{isAuthenticated, userHasAuthenticated,authToken, setAuthToken, cartItems,setCartItems }}>
        <Routes/>
        </AppContext.Provider>
      </div>
  );
}
