//StdForm using functional component

import {useState, useEffect} from 'react';

//import ValidationMsg component
import ValidationMsg from './ValidationMsg';

const StdFormFunctional = () =>{
const [form, setForm] = useState({
    username: "", usernameValid: false,
    email:"", emailValid: false,
    password: "", passwordValid: false,
    repeatPassword: "", repeatPasswordValid: false,
    formValid: false,
    errMsg: {}
});

let {username, usernameValid, email, emailValid, password, passwordValid, repeatPassword, repeatPasswordValid, formValid,errMsg} = form

console.log("username validity+++++++++++++++", usernameValid)

//Form validation

// const formValidation = () =>{  
//     // let formValid= true  
//     if(!usernameValid ){
//         // usernameValid && emailValid && passwordValid && repeatPasswordValid        
//         formValid= false
//         console.log("sorry, form is invalid", formValid)
//     }
//     setForm({formValid:true})
//     console.log("Checking form", formValid)
// }

const formValidation = () =>{
    let {usernameValid, emailValid, passwordValid, repeatPasswordValid, formValid} = form
    // formValid=true
    if(usernameValid && emailValid && passwordValid && repeatPasswordValid){
        formValid= true
    }
    // else{
    //     formValid=false
    // }
    setForm({formValid})
        console.log("form is VVVVVValidated", formValid)
        console.log("form.user is VVVVVValidated", usernameValid)
        console.log("form,email is VVVVVValidated",emailValid)
        console.log("form.pass is VVVVVValidated", passwordValid)
        console.log("form.repeat passs is VVVVVValidated", repeatPasswordValid)
}

//===============================Input validation=====================================
//username validation==================

    const userValidation = () =>{     
        let {username} = form ; 
        usernameValid= true;
        errMsg.username= "";      
      
        if(username.length<6 || username.length>15){
            usernameValid= false;
            errMsg.username = "Username should have 6-15 characters"        
        }
        setForm({usernameValid, errMsg}, formValidation())    
        // console.log("errmessage.username===>:", errMsg) 
        console.log("errmessage.usernameValid===>:", usernameValid) 
        
    }


//email validation=======================
// let emailValidation

// useEffect(()=>{
    const emailValidation =()=>{
        let {email} = form    
        let emailValid=true
        errMsg.email=''
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){             
            emailValid=false;    
            errMsg.email="Invalid email format"            
        }
        setForm({emailValid, errMsg}, formValidation())
        // console.log("errmessage.emailllllll=======>>:", errMsg)        
    }
//     return ()=>emailValidation() 

// },[email,errMsg])


//password validation======================

const passwordValidation = () =>{ 
    let {password} = form   
    let passwordValid= true
    errMsg.password=""

    if(password.length < 7){
        passwordValid= false
        errMsg.password= "Password should be atleast 8 characters long!"       
    }
    console.log("errmessage.password", errMsg)
    setForm({passwordValid, errMsg}, formValidation())
    // console.log("errmessage.password===>", errMsg)
}

//repeat password Validation================

const repeatPasswordValidation = () =>{
    let {password, repeatPassword}=form   
    let repeatPasswordValid= true
    errMsg.repeatPassword=""

    if(repeatPassword!==password && repeatPassword.length<password.length-1){
        repeatPasswordValid=false
        errMsg.repeatPassword= "Sorry! Password doesn't match"       
    }
    
    setForm({repeatPasswordValid, errMsg}, formValidation())
    // console.log("errmessage.repeatPassword===>>", errMsg)   
}
    
    //submitHandler=========
     const submitHandler =(e)=>{
         e.preventDefault()
     }


    //Reset function to reset the state to initial state================
    const resetForm =(e)=>{
        e.preventDefault()
        setForm({
            username: "", usernameValid: false,
            email:"", emailValid: false,
            password: "", passwordValid: false,
            repeatPassword: "", repeatPasswordValid: false,
            formValid: false,
            errMsg: {}
        })
    }
    
           
    return(
        <form>
            {/* input for username===================================*/}
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" value={username}  onChange={(e)=>setForm({ ...form, username: e.target.value}, userValidation())} />
               
                <span><ValidationMsg valid={usernameValid} name={username}
                message={errMsg.username}
                /></span>
            </div>

            {/* Input for email ========================================*/}
            <div className="form-group" >
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" id="email"
                onChange={(e)=>setForm({...form, email: e.target.value}, emailValidation())}  />
                <span><ValidationMsg valid={emailValid} 
                message={errMsg.email}  
                /></span>
            </div>

            {/* Input for Password ======================================*/}
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" 
                 onChange={(e)=>setForm({...form, password: e.target.value}, passwordValidation())}/>
                <span><ValidationMsg valid={passwordValid} 
                message={errMsg.password}  
                /></span>
            </div>

            {/* Input for Repeat Password================================= */}
            <div className="form-group">
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input type="password" className="form-control" id="repeatPassword" 
                 onChange={(e)=>setForm({...form, repeatPassword: e.target.value}, repeatPasswordValidation())} />
                <span><ValidationMsg valid={repeatPasswordValid} 
                message={errMsg.repeatPassword} 
                /></span>
            </div>

            {/* Submit and reset button ===================================*/}
            <div>
            <button className="btn btn-primary btn-sm" type="submit" disabled={!formValid} onClick={(e)=>submitHandler()} >Submit</button>
            <button className="btn btn-danger btn-sm mx-4 px-3" type="submit" onClick={(e)=>resetForm()}>Reset</button>
            </div>

            <p>Username:{username}</p>
            <p>Email:{email}</p>
            <p>Password:{password}</p>
            <p>Confirm Password:{repeatPassword}</p>
        </form>
    )
}

export default StdFormFunctional