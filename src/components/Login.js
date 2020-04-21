import React, {useState} from 'react'
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'
import "./Login.css"
import {login} from "../auth/Auth";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm(){
    return email.length>0 && password.length>0
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const token = await login(email,password);
    if(token == undefined){
      alert('Login Unsuccessful')
    }
    else
    alert('Logged In');
  }
  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value)
  }
  return(

      <div className={"Login"}>
        <form onSubmit={handleSubmit}>


          {/** Email Control **/}
          <FormGroup controlId={"email"} bsSize={"large"}>
            <ControlLabel>Email</ControlLabel>
            <FormControl type={"email"} value={email} autoFocus onChange={onEmailChange}/>
          </FormGroup>

          {/* Password Control */}
          <FormGroup controlId={"password"} bsSize={"large"}>
            <ControlLabel>Email</ControlLabel>
            <FormControl type={"password"} value={password} autoFocus onChange={onPasswordChange}/>
          </FormGroup>

          <Button block type={"submit"} bsSize={"large"} disabled={!validateForm()} >
            Login
          </Button>
        </form>
      </div>
  );
}