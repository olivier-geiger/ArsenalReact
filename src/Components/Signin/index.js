import React, { useState } from 'react';
import { firebase } from '../../firebase';
import { toast } from 'react-toastify';
import { CircularProgress } from '@material-ui/core';
// import { Redirect } from 'react-router-dom';
import { Zoom, Slide } from 'react-awesome-reveal';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignIn = (props) => {
  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address !')
        .required('The email is required'),
      password: Yup.string()
        .min(8, 'The password must have 8 caracters !')
        .required('The email is required')
    }),
    onSubmit: (values) => {
      setLoading(true)
      submitForm(values)
    }
  })

  const submitForm = (values) => {
    firebase.auth()
    .signInWithEmailAndPassword(
      values.email,
      values.password
    ).then(() => {
      props.history.push('/dashboard')
      toast.success(`🦄 Welcome! ${values.email}`, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }).catch(err => {
      setLoading(false)
      toast.error('🦄 You are not registered!', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    })
  }


  return (
    <div className="container">
      <div className="signin_wrapper" style={{ margin: '100px' }}>

        <Zoom top>
          <h2>Please login</h2>
        </Zoom>
        
        <Slide left>
          <form onSubmit={formik.handleSubmit}>

            <input
              name="email"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ?
              <div className="error_label">
                {formik.errors.email}
              </div>
              : null}


            <input
              name="password"
              placeholder="Enter your password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ?
              <div className="error_label">
                {formik.errors.password}
              </div>
              : null}


            {loading ?
              <CircularProgress color="secondary" className="progress" />
              :
              <button type="submit">Log in</button>
            }

          </form>
        </Slide>

      </div>
    </div>
  )

}

export default SignIn