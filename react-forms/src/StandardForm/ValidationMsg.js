const ValidationMsg = (props) => {
    console.log("I am validation prop:", props) 
 
    if(!props.valid){
        return(
        <div>           
            <p className="help-block text-danger">{props.message}</p>
        </div>
        ) 
  }
  return "valid"
    
}

export default ValidationMsg;