//StdForm using functional component

import {useState} from 'react';

//import ValidationMsg component
import ValidationMsg from './ValidationMsg';

const StdFormFunctional = () =>{
const [form, setForm] = useState({
    username: "", 
    email:"", 
    password: "", 
    repeatPassword: "", 
    inputValid: {},   
    formValid: {},         
    // formValid:false,
    errMsg: {} 
});

let {username, email, password, repeatPassword, inputValid, formValid,errMsg} = form

//Form validation
const formValidation = () =>{
    // let {formValid} = form
    formValid.validity=false
    
    if(inputValid.user && inputValid.email && inputValid.password && inputValid.repeat){
        formValid.validity= true
        // formValid=true
    }
  
    setForm({formValid})
        console.log("form is Validated==>>>>>>>>>>>>>>>>>", formValid)
        // console.log("form.user is Validated===>", usernameValid)
        // return formValid
}

//Input validation======================
//username validation==================

    const userValidation = () =>{    
        let {username} = form ; 
        inputValid.user= true;       
        errMsg.username= "";      
      
        if(username.length<6 || username.length>15){
            inputValid.user= false
            errMsg.username = "Username should have 6-15 characters"              
        }
    
        setForm({...form, inputValid, errMsg}, formValidation())    
        console.log("usernameValid===>:", inputValid)           
    }
    
//email validation=======================
// let emailValidation

// useEffect(()=>{
    const emailValidation =()=>{
        let {email} = form    
        inputValid.email=true
        errMsg.email=''
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){             
            inputValid.email=false;    
            errMsg.email="Invalid email format"            
        }
        setForm({inputValid, errMsg}, formValidation())          
    }
//     return ()=>emailValidation() 

// },[email,errMsg])


//password validation======================

const passwordValidation = () =>{ 
    let {password} = form   
    inputValid.password= true
    errMsg.password=""

    if(password.length < 7){
        inputValid.password= false
        errMsg.password= "Password should be atleast 8 characters long!"       
    } 
    setForm({inputValid, errMsg}, formValidation())
    console.log("passwordValid===>", inputValid)
}

//repeat password Validation================

const repeatPasswordValidation = () =>{
    let {password, repeatPassword}=form   
    inputValid.repeat= true
    errMsg.repeatPassword=""

    if(repeatPassword!==password && repeatPassword.length<password.length-1){
        inputValid.repeat=false
        errMsg.repeatPassword= "Sorry! Password doesn't match"       
    }
    
    setForm({inputValid, errMsg}, formValidation())
    console.log("repeatPassword Validity===>>", inputValid)   
}
    
    //submitHandler=========
     const submitHandler =(e)=>{
         e.preventDefault()
     }


    //Reset function to reset the state to initial state================
    const resetForm =(e)=>{
        e.preventDefault()
        setForm({
            username: "", 
            email:"", 
            password: "",
            repeatPassword: "",
            inputValid:{},
            formValid: {},
            errMsg: {}
        })
    }
    console.log("Is form valid????", formValid.validity)  
           
    return(
        <form>
            {/* input for username===================================*/}
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" value={username}  onChange={(e)=>setForm({ ...form, username: e.target.value}, userValidation())} />
               
                <span><ValidationMsg valid={inputValid.user} name={username}
                message={errMsg.username}
                /></span>
            </div>

            {/* Input for email ========================================*/}
            <div className="form-group" >
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" id="email"
                onChange={(e)=>setForm({...form, email: e.target.value}, emailValidation())}  />
                <span><ValidationMsg valid={inputValid.email} 
                message={errMsg.email}  
                /></span>
            </div>

            {/* Input for Password ======================================*/}
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" 
                 onChange={(e)=>setForm({...form, password: e.target.value}, passwordValidation())}/>
                <span><ValidationMsg valid={inputValid.password} 
                message={errMsg.password}  
                /></span>
            </div>

            {/* Input for Repeat Password================================= */}
            <div className="form-group">
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input type="password" className="form-control" id="repeatPassword" 
                 onChange={(e)=>setForm({...form, repeatPassword: e.target.value}, repeatPasswordValidation())} />
                <span><ValidationMsg valid={inputValid.repeat} 
                message={errMsg.repeatPassword} 
                /></span>
            </div>

            {/* Submit and reset button ===================================*/}
            <div>
            <button className="btn btn-primary btn-sm" type="submit" disabled={!formValid.validity} onClick={(e)=>submitHandler()} >Submit</button>
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