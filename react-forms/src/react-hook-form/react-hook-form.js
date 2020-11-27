import { useForm, ErrorMessage } from "react-hook-form";
function ReactHookForm() {

    const {register, errors, handleSubmit, getValues, formState, reset} = useForm({
        validateCriteriaMode:"all",
        mode:"onChange"
    });
    return (
        <div>
           <h5>react hooks forms</h5> 
            <form>

                {/* username input */}
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input className="form-control" name="username" type="text"
                    ref={register({
                        required:"Username is required",
                        maxLength:{
                            value:15,
                            message:"Username should be between 6 and 15 characters"
                        },
                        minLength:{
                            value:6,
                            message:"Username should be between 6 and 15 characters"  
                        }
                    })}
                    />
                </div>

                {/* email input */}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" name="email" type="email"/>
                </div>

                {/* Password input */}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" name="password" type="password"/>
                </div>

                {/* ConfirmPassword input */}
                <div className="form-group">
                    <label htmlFor="confirmPassword"> Confirm Password</label>
                    <input className="form-control" name="confirmPassword" type="password"/>
                </div>
            </form>
        </div>
    )
}

export default ReactHookForm