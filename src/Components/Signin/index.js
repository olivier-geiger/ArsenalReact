import React, {useState} from 'react';
// import {  TextField} from '@material-ui/core'
// import { CircularProgress } from '@material-ui/core';
// import { Redirect } from 'react-router-dom';
import { Slide, Zoom } from 'react-awesome-reveal';
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

  const handleSumbit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="container">
      <div className="signin_wrapper" style={{margin: '300px'}}>
      <Zoom top>
        <h2>Please login</h2>
      </Zoom>

      <Slide left > 
        <form onSubmit={handleSumbit}>
        <input
          name="email"
          label="Email"
          value={formik.values.email}
          placeholder="Enter your email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <input
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          placeholder="Enter your password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <button type="submit">Log in</button>
        </form>

      </Slide>

      </div>
    </div>
  );
};

export default Signin;