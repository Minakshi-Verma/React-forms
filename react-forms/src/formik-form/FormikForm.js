import React, { Component } from 'react';
import {Formik} from'formik';
import * as Yup from 'yup';

export default class FormikForm extends Component {

    state = {
        userName:"",
        email:"",
        password:"",
        confirmPassword: "",
        isValid: false
    }

    handleChange = (values)=>{
        this.setState({
            userName: values.userName,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword
        })
    }

    // To validate the formik form using Yup---We need to create the validation schema with yup( validate schema would be a Yup-object that we need to shape and Yup api has its own methods for validation that we will use( like .min(), .max(), .required() etc))

    validationSchema = Yup.object().shape({
        userName: Yup.string()
            .min(6, "Username should be between 6 and 15 characters")
            .max(15, "Username should be between 6 and 15 characters")
            .required("Username is required"),

        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),

        password: Yup.string()
            .min(8, "Should be atleast 8 charaters")
            .required("Password is required"),

        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "password don't match"),

    })
    render() {
        return (
            <div>
                <h5>Formik form with validation using yup</h5>
                {/* we will use "isSubmitting" attr when creating the button disabled */}
                <Formik
                    initialValues={{username:'', email:'', password:'', confirmPassword:'', isSubmitting:"true" }} 
                    validationSchema={this.validationSchema}
                    onSubmit={(values, {setSubmitting, resetForm})=>{
                        setTimeout(()=>{
                            console.log(values);
                            // updating the state to display the updated data on the UI after form submission
                            this.setState({
                                userName: values.userName,
                                email:values.email,
                                password: values.password,
                                confirmPassword: values.confirmPassword
                            })
                            setSubmitting(true)
                            resetForm();
                            setSubmitting(false)
                        }, 400)
                    }}
                >
                    {/* We call formik Api here and  use the methods and attributes (choose what is needed for validation) in the following object (here we are using the following) */}
                    {({values,
                    errors,
                    touched,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleReset,
                    handleSubmit
                    })=>(
                        <form onSubmit = {handleSubmit} noValidate>

                            {/* Input for username */}
                            <div className="form-group">
                                <label htmlFor="userName">Username</label>
                                <input 
                                    className="form-control" 
                                    type="text" 
                                    name="userName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.userName} 
                                />
                                {/* Error message to display */}
                                <span className="help-block text-danger">{errors.userName && touched.userName && errors.userName}</span>
                            </div>

                             {/* Input for email */}
                             <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input 
                                    className="form-control" 
                                    type="email" 
                                    name="email" 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {/* Error message to display */}
                                <span className="help-block text-danger">{errors.email && touched.email && errors.email}</span>
                            </div>

                              {/* Input for password */}
                              <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input 
                                    className="form-control" 
                                    type="password" 
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {/* Error message to display */}
                                <span className="help-block text-danger">{errors.password && touched.password && errors.password}</span>
                            </div>

                             {/* Input for confirm password */}
                             <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input 
                                    className="form-control" 
                                    type="password" 
                                    name="confirmPassword"
                                    onChange={handleChange}
                                    onBlur={handleBlur}   //handleBlur is useful for when you need to track whether an input has been touched or not
                                    value={values.confirmPasssword} 
                                />
                                {/* Error message to display */}
                                <span className="help-block text-danger">{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</span>
                            </div> 
                            <div className="btn-group">
                                <button className="btn btn-primary" type="submit" disabled={isSubmitting}>Submit</button>
                                <button 
                                    disabled={!dirty}
                                    className="btn btn-danger"
                                    type="button"
                                    onClick={handleReset}
                                >Reset</button>
                            </div>                               
                        </form>
                    )}
                </Formik>
                    <p>Username:{this.state.userName}</p>
                    <p>Email:{this.state.email}</p>
                    <p>Password:{this.state.password}</p>
                    <p>Confirm Password:{this.state.confirmPassword}</p>                
            </div>
        )
    }
}
