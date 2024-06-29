import Firstcomponent from "./components/Firstcomponent";
import Backdrop from "./components/Backdrop";
import { useState } from "react";


function App() {

  const [modalOpen,setmodalopen] = useState(false);

  const modalclosehandeler = ()=>{
    setmodalopen(false);
  }

  const modalOpenhandeler = ()=>{
    setmodalopen(true);
  }

  return (
   <div >
    <h1>MY REACT APPLICATION</h1>
    {modalOpen?<Firstcomponent owner = "Sunaina " reason = "Learning React" closeModal = {modalclosehandeler}  />:null}
    {modalOpen?< Backdrop/>:null}
    <button onClick={modalOpenhandeler}>Open Modal</button>
           
   </div>
  );
}

export default App;
