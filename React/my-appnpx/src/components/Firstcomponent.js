


function Firstcomponent(props){
   
    return   (<div className="modal">
    <h1> {props.owner} React Application</h1>
    <p>It's an Application - {props.reason}</p>
    <button onClick={props.closeModal} >Close</button>
    </div>)
}


export default Firstcomponent;