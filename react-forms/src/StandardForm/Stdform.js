
const Stdform = () =>{

    return(
        <form>
            {/* input for username */}
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" className="" id="username" />

            </div>

            {/* Input for email */}
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" className="" id="email" />
                
            </div>

            {/* Input for Password */}
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" className="" id="password" />

            </div>

            {/* Input for Repeat Password */}
            <div>
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input type="password" className="" id="repeatPassword" />

            </div>

        </form>
    )
}

export default Stdform