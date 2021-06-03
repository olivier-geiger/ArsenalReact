import React, { useState } from 'react';

import { CircularProgress } from '@material-ui/core';
// import { Redirect } from 'react-router-dom';
import { Zoom, Slide } from 'react-awesome-reveal';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignIn = () => {
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
      console.log(values)
    }
  })


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
              placeholder="Email"
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