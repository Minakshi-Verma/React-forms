import React, { Component } from 'react';
import {Formik} from'formik';
import * as Yup from 'yup';

export default class FormikForm extends Component {

    state = {
        username:"",
        email:"",
        password:"",
        confirmPassword: "",
        isValid: false
    }
    render() {
        return (
            <div>
                <h5>Formik form with validation using yup</h5>
                <Formik
                    initialValues={{username:'', email:'', password:'', confirmPasssword:'', isSubmitting:"true" }}
                >
                    {/* We call Api and attributes in the following object  */}
                    {({})=>(
                        <form noValidate>

                            {/* Input for username */}
                            <div className="form-group">
                                <label htmlFor="userName">Username</label>
                                <input 
                                    className="form-control" 
                                    type="text" 
                                    name="userName" />
                            </div>

                             {/* Input for email */}
                             <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input 
                                    className="form-control" 
                                    type="email" 
                                    name="email" />
                            </div>

                              {/* Input for password */}
                              <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input 
                                    className="form-control" 
                                    type="password" 
                                    name="password" />
                            </div>

                             {/* Input for confirm password */}
                             <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input 
                                    className="form-control" 
                                    type="password" 
                                    name="confirmPassword" />
                            </div>

                        </form>
                    )}
                </Formik>
                
            </div>
        )
    }
}
