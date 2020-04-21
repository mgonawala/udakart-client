
import React from 'react';
import Axios from 'axios'



  const SIGNUP_API = 'http://localhost:8080/api/v0/users/auth/signup';
  const LOGIN_API = 'http://localhost:8080/api/v0/users/auth/login';

   export async function login(e, p) {

     try {
       const response = await Axios({
         method: 'post',
         url: LOGIN_API,
         data: {
           email: e,
           password: p
         },
         header: {
           'Content-Type': 'applicaiton/json',
           'Accept': 'application/json'
         }
       });
       return response.data.token;
     }
     catch (e) {
       return undefined;
     }

  }

