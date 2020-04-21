
import React from 'react';
import Axios from 'axios'
import {useAppContext} from "../lib/contextLib";

const SIGNUP_API = 'http://localhost:8080/api/v0/users/auth/signup';
const LOGIN_API = 'http://localhost:8080/api/v0/users/auth/login';
const VERIFY_API = 'http://localhost:8080/api/v0/users/auth/verification';

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

{/* Verify JWT Auth Token*/}
export async function verifyToken(token) {
     console.log(token);
       try {
         const response = await Axios({
           method: 'get',
           url: VERIFY_API,
           headers: {
             'Content-Type': 'applicaiton/json',
             'Authorization': `Bearer ${token}`
           }
         });
         if( response.status == 200){
           return true;
         }
         else{
           return false;
         }

       }
       catch (e) {
         return false;
       }


}

