
const Stdform = () =>{

    return(
        <form>
            {/* input for username */}
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" />

            </div>

            {/* Input for email */}
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" id="email" />
                
            </div>

            {/* Input for Password */}
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" />

            </div>

            {/* Input for Repeat Password */}
            <div className="form-group">
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input type="password" className="form-control" id="repeatPassword" />

            </div>

        </form>
    )
}

export default Stdform