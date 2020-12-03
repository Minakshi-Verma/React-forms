// StdForm using class component

import React, { Component } from 'react';
import ValidationMsg from './ValidationMsg';

export default class StdFormClass extends Component {

    state = {
        username: "", usernameValid: false,
        email:"", emailValid: false,
        password: "", passwordValid: false,
        repeatPassword: "", repeatPasswordValid: false,
        formValid: false,
        errMsg: {}
    }


    //form Validation 
    formValidation = () =>{
        const {usernameValid,emailValid, passwordValid, repeatPasswordValid} = this.state
        // if(usernmeValid && emailValid && passwordValid && repeatPasswordValid){
            this.setState({formValid:true})
        // }

        this.setState({
            formValid:usernameValid &&emailValid && passwordValid && repeatPasswordValid
        })
    }


    //username validation===========================================
    userValidation= ()=>{
        const {username} = this.state
        let usernameValid = true
        let errMsg= {...this.state.errMsg} 

        if(username.length<6 || username.length>15){
            usernameValid= false
            errMsg.username="Username should have  more than 6 and less than 15 characters"
        }
        this.setState({usernameValid, errMsg }, this.formValidation)
        console.log("errorMessage.username:", errMsg)
    }

    //email validation===================================================
    emailValidation =()=>{   
    const {email} = this.state
    let emailValid=true
    let errMsg={...this.state.errMsg}
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    // if(email.length<6){
        emailValid=false;

        errMsg.email="Invalid email format"
        console.log("errmessage.email:", errMsg.email)  
    }
    this.setState({emailValid, errMsg}, this.formValidation)   
    console.log("errmessage.email:", errMsg)  
}

//password validation====================================================

    passwordValidation = () =>{ 
    let passwordValid= true
    let errMsg={...this.state.errMsg}

    if(this.state.password.length < 8){
        passwordValid= false
        errMsg.password= "Password should be atleast 8 characters long!"
        console.log("passwordfailed", passwordValid)
    }
    console.log("errmessage.password", errMsg)
    this.setState({passwordValid, errMsg},this.formValidation )
    // console.log("errmessage.password", errMsg)
}

//repeat password Validation==============================================

    repeatPasswordValidation = () =>{   
    let repeatPasswordValid= true
    let errMsg={...this.state.errMsg}

    if(this.state.repeatPassword!==this.state.password){
        repeatPasswordValid=false
        errMsg.repeatPassword= "Sorry! Password doesn't match"
        console.log("passwordrepeatfailed", repeatPasswordValid)       
    }
    
    this.setState({repeatPasswordValid, errMsg}, this.formValidation)
    console.log("errmessage.repeatPassword", errMsg)
    console.log("confirm password validity", repeatPasswordValid)
}
    
  //submitHandler
    submitHandler =(e)=>{
    alert("form submitted")
    e.preventDefault()  
}

 //Reset function to reset the state to initial state================
    resetForm =(e)=>{ 
        // e.stopPropagation()
        // alert("form reset  complete")  
        
    this.setState({
        username: "", usernameValid: false,
        email:"", emailValid: false,
        password: "", passwordValid: false,
        repeatPassword: "", repeatPasswordValid: false,
        formValid: false,
        errMsg: {}
    })
    
}

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                 {/* input for username=============================================== */}
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username"  onChange={(e)=>this.setState({username: e.target.value},this.userValidation)} />
               
                <span><ValidationMsg valid={this.state.usernameValid} 
                message={this.state.errMsg.username} 
                /></span>
            </div>

            {/* Input for email ==================================================*/}
            <div className="form-group" >
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" id="email"
                onChange={(e)=>this.setState({email: e.target.value},this.emailValidation)}  />
                <span><ValidationMsg valid={this.state.emailValid} 
                message={this.state.errMsg.email}  
                /></span>
            </div>

            {/* Input for Password =============================================*/}
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" 
                 onChange={(e)=>this.setState({password: e.target.value}, this.passwordValidation)}/>
                <span><ValidationMsg valid={this.state.passwordValid} 
                message={this.state.errMsg.password}  
                /></span>
            </div>

            {/* Input for Repeat Password======================================== */}
            <div className="form-group">
                <label htmlFor="repeatPassword">Confirm Password</label>
                <input type="password" className="form-control" id="repeatPassword" 
                 onChange={(e)=>this.setState({repeatPassword: e.target.value}, this.repeatPasswordValidation)} />
                <span><ValidationMsg valid={this.state.repeatPasswordValid} 
                message={this.state.errMsg.repeatPassword} 
                /></span>
            </div>

            {/* Submit and reset button ==========================================*/}
            <div>
            <button className="btn btn-primary btn-sm" type="submit" disabled={!this.state.formValid} >Submit</button>
            <button className="btn btn-danger btn-sm mx-4 px-3"  onClick={this.resetForm}>Reset</button>
            </div>

            <p>Username:{this.state.username}</p>
            <p>Email:{this.state.email}</p>
            <p>Password:{this.state.password}</p>
            <p>Confirm Password:{this.state.repeatPassword}</p>               
            </form>
        )
    }
}
