import { useForm} from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

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
                     <ErrorMessage errors={errors} name="username">
                      {({messages})=>
                        messages &&
                        Object.entries(messages).map(([type,message])=>(
                            <p className="help-block text-danger" key={type}>{message}</p>
                        ))
                      }
                    </ErrorMessage>
                </div>

                {/* email input */}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" name="email" type="email"
                    ref={register({
                      required:"Email is required",
                        pattern:{
                            value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message:"Enter a valid email address"
                        }
                      }                        
                    )}
                    />
                   
                </div>

                {/* Password input */}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" name="password" type="password"
                    ref={register({
                        required:"Password is required",
                        minLength:{
                            value:8,
                            message:"Password should be atleast 8 characters"
                        }
                    })}
                    />
                </div>

                {/* ConfirmPassword input */}
                <div className="form-group">
                    <label htmlFor="confirmPassword"> Confirm Password</label>
                    <input className="form-control" name="confirmPassword" type="password"
                    ref={register({
                        required:"Please confirm your password",
                        validate: value => {
                            if(value === getValues("password")){
                                return true
                            }else{
                                return"The password do not match"
                            }
                        }
                    })}
                    />
                </div>
            </form>
        </div>
    )
}

export default ReactHookForm