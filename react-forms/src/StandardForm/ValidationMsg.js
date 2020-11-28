const ValidationMsg = ({valid,message}) => {
    console.log("I am validation props-message:", message)
 
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