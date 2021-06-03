import React, {useState} from 'react';
import {  TextField} from '@material-ui/core'
import { CircularProgress } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { Slide, Bounce } from 'react-awesome-reveal';
import { useFormik } from 'formik';
import * as Yup from 'yup'

const Signin = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationsSchema: Yup.object({
      email: Yup
          .string('Enter your email')
          .email('Enter a valide email')
          .required('The email is required'),
      password: Yup
          .string('Enter your password')
          .min(8, 'Password should be of minimum 8 characters')
          .required('The email is required'),
    }),
    onSubmit: (values) =>{

    }
  });

  return (
    <div className="container">
      <div className="signin_wrapper" style={{margin: '300px'}}>
      
        <h1>CONNEXION</h1>
     

      <Slide left > 
        <form onSubmit={formik.handleSumbit}>
        <TextField
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          />
        </form>

      </Slide>

      </div>
    </div>
  );
};

export default Signin;