import {useState} from 'react';

//import ValidationMsg component
import ValidationMsg from './ValidationMsg';

const Stdform = () =>{
const [form, setForm] =useState({
    username: "", usernameValid: false,
    email:"", emailValid: false,
    password: "", passwordValid: false,
    repeatPassword: "", repeatPasswordValid: false,
    formValid: false,
    errMsg: {}
})

let {username, usernameValid, email, emailValid, password, passwordValid, repeatPassword, repeatPasswordValid, formValid, errMsg} = form

//Input validation
//Form validation

const formValidation = () =>{
    if(usernameValid && emailValid && passwordValid && repeatPasswordValid){
        formValid=true
    }
    setForm({formValid})
}

//username validation
const userValidation = () =>{
    usernameValid= true
    errMsg={...errMsg}
    if(username.length<6 || username.length>15){
        usernameValid= false
        errMsg.username = "Username should have 6-15 character"
    }
    setForm({usernameValid, errMsg},formValidation)
}

//email validation
const emailValidation =()=>{
    emailValid=true
    errMsg={...errMsg}
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        emailValid=false;
        errMsg.email="Invalid email format"
    }
    setForm({emailValid, errMsg},formValidation)
}

//password validation

const passwordValidation = () =>{
    passwordValid= true
    errMsg= {...errMsg}

    if(password.length<8){
        passwordValid= false
        errMsg.password= "Password should be atleast 8 characters long!"
    }
    setForm({passwordValid, errMsg},formValidation)
}

//repeat password Validation

const repeatPasswordValidation = () =>{
    repeatPasswordValid= true
    errMsg={...errMsg}

    if(repeatPassword!==password){
        repeatPassword=false
        errMsg.repeatPassword= "Sorry! Password doesn't match"       
    }
    setForm({repeatPasswordValid, errMsg},formValidation)
}

    return(
        <form>
            {/* input for username */}
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" value={username} onChange={(e)=>setForm({username: e.target.value},userValidation)} />
                <span><ValidationMsg valid={usernameValid} /></span>
            </div>

            {/* Input for email */}
            <div className="form-group" >
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" id="email" value={email}
                onChange={(e)=>setForm({email: e.target.value}, emailValidation)}  />
                {/* <span><ValidationMsg valid={emailValid} message={errMsg.email}/></span> */}
            </div>

            {/* Input for Password */}
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" value={password} onChange={(e)=>setForm({password: e.target.value}, passwordValidation)}/>
                {/* <span><ValidationMsg valid={passwordValid} message={errMsg.password} /></span> */}
            </div>

            {/* Input for Repeat Password */}
            <div className="form-group">
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input type="password" className="form-control" id="repeatPassword" value={repeatPassword} onChange={(e)=>setForm({repeatPassword: e.target.value}, repeatPasswordValidation)} />
                {/* <span><ValidationMsg valid={repeatPasswordValid} message={errMsg.repeatPassword} /></span> */}
            </div>

            {/* Submit and reset button */}
            <button type="submit">Submit</button>
            <button type="submit">Reset</button>

        </form>
    )
}

export default Stdform