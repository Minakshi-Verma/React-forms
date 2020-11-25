import {useState} from 'react';

const Stdform = () =>{
const [form, setForm] =useState({
    username: "", userNameValid: false,
    email:"", emailValid: false,
    password: "", passwordValid: false,
    repeatPassword: "", repeatPasswordValid: false,
    formValid: false,
    errMsg: {}
})

const {username, userNameValid, email, emailValid, password, passwordValid, repeatPassword, repeatPasswordValid, formValid, errMsg} = form

//Input validation

//username validation
const userValidation = () =>{
    userNameValid= true
    errMsg={...errMsg}
    if(username.length<6 || username.length>15){
        userNameValid= false
        errMsg.username = "Username should have 6-15 character"
    }
    setForm({userNameValid, errMsg})
}

//email validation
const emailValidation =()=>{
    emailValid=true
    errMsg={...errMsg}
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        emailValid=false;
        errMsg.email={"Invalid email format"}
    }
    setForm(emailValid, errMsg)
}

//password validation

const passwordValidation = () =>{
    passwordValid= true
    errMsg= {...errMsg}

    if(password.length<8){
        passwordValid= false
        errMsg.password= "Password should be atleast 8 characters long!"
    }
    setForm({passwordValid, errMsg})
}

//repeat password Validation

const repeatPassword = () =>{
    repeatPasswordValid= true
    errMsg={...errMsg}

    if(repeatPassword!==password){
        repeatPassword=false
        errMsg.repeatPassword= "Sorry! Password doesn't match"       
    }
    setForm({repeatPasswordValid, errMsg})
}

    return(
        <form>
            {/* input for username */}
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" value={username} onChange={(e)=>setForm({username: e.target.value})} />

            </div>

            {/* Input for email */}
            <div className="form-group" >
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" id="email" value={email}
                onChange={(e)=>setForm({email: e.target.value})}  />
                
            </div>

            {/* Input for Password */}
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" value={password} onChange={(e)=>setForm({password: e.target.value})}/>

            </div>

            {/* Input for Repeat Password */}
            <div className="form-group">
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input type="password" className="form-control" id="repeatPassword" value={repeatPassword} onChange={(e)=>setForm({repeatPassword: e.target.value})} />

            </div>

        </form>
    )
}

export default Stdform