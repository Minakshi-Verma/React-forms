//StdForm using functional component

import {useState, useRef} from 'react';

//import ValidationMsg component
import ValidationMsg from './ValidationMsg';

const StdFormFunctional = () =>{
const [form, setForm] = useState({
    username: "", 
    // userValid:false,  // not taking separate inputValid attr. but can be used and updated using useRef() hook
    email:"", 
    password: "", 
    repeatPassword: "", 
    inputValid: {},   // used a common validity object, to which we would add validity attr for different inputs in their validation function
    formValid: {},   
    errMsg: {} 
});

////One can use useRef hook, to get the reference of state, and destrure the current out of it. Now use current.attribute anywhere in the code and update tehe state
// const refstate= useRef(form)
// let {current} = refstate
// console.log("cccurent", current)

let {username,email, password, repeatPassword, inputValid, formValid,errMsg} = form

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
        // current.userValid= true //use this, if want to go with useRef() hook reference      
        inputValid.user= true;       
        errMsg.username= "";      
      
        if(username.length<6 || username.length>15){          
            // userValid=false   // you can't update the state by updating the userValid value inside this fx
            // current.userValid= false   //we can update the state reference(current.userValid) to update the form state
            inputValid.user= false    //Another option is, take the state as a object and update the key. This way you can update the state for that particular attribute
            errMsg.username = "Username should have 6-15 characters"              
        }
    
        setForm({...form, inputValid, errMsg}, formValidation())   //redundant line of code 
        console.log("usernameValid===>:", inputValid)              
    }
    
    // console.log("Is form uservalid????", current.userValid) 
    // console.log("userValid", userValid)
    // console.log("form.userValid", form.userValid)
    console.log("inputValid.user", inputValid.user)
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