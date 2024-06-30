function Box (props){
    return <div 
    onClick={props.onClick}
    style={{
         display:"flex",
         justifyContent: "center", alignItems:'center',
         border: "1px solid black",
         height: "100px", }}
    >
    <h2>{props.value}</h2>
   
    </div>  
    
}

export default Box;