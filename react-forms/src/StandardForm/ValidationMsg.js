const ValidationMsg = (props) => {
    console.log("I am validation props", props)
    if(!props.valid){
        return(
        <div>{props.message}</div>
        ) 
  }
  return null
    
}

export default ValidationMsg