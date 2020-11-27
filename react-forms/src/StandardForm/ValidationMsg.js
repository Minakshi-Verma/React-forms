const ValidationMsg = ({valid,message}) => {
    // console.log("I am validation props-message:", message)
    // console.log("I am validation props-field:", name)
    if(!valid){
        return(
        <div>           
            <p>Error message:{message}</p>
        </div>
        ) 
  }
  return null
    
}

export default ValidationMsg