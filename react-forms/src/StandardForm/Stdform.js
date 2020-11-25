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