import React from "react";
import Box from "./Box";
import { useState } from "react";


const Board = ()=> {


   const [state, setstate] = useState(Array(9).fill(null))
   const [isXturn, setIsXTurn] = useState(true);
   

   const checkWinner = ()=>{
    const winnerLogic = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];

    for(let logic of winnerLogic ){
      const [a,b,c] = logic;

      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
        
    }
    return false;
   }

   const isWinner = checkWinner();

   const hadleClick = (index)=>{
   if(state[index] !== null){
    return;
   }

   const copyState = [...state];
   copyState[index] = isXturn?"X":"O"; 
   setstate(copyState);
   setIsXTurn(!isXturn);
   };

   const handleReset = ()=>{ 
    setstate(Array(9).fill(null));
   }

    return (
      
    
    <div className="board-container" style={{display: "flex",
     justifyContent:"center",
     alignitems: "center",
      margin:"25%" }}>
        
         {isWinner ? (
            <>{isWinner} Won!!!<button onClick={handleReset}>Play Again</button> </>
          ):(
          <>

          
          
          <div style={{width:"100%"}} >
           <Box onClick={()=> hadleClick(0)} value={state[0]} />
           <Box onClick={()=> hadleClick(1)} value={state[1]}  />
           <Box onClick={()=> hadleClick(2)} value={state[2]}  />
         </div>
         <div style={{width:"100%"}}>
           <Box onClick={()=> hadleClick(3)} value={state[3]} />
           <Box onClick={()=> hadleClick(4)} value={state[4]} />
           <Box onClick={()=> hadleClick(5)} value={state[5]} />
         </div>
         <div style={{width:"100%"}} >
           <Box onClick={()=> hadleClick(6)} value={state[6]} />
           <Box onClick={()=> hadleClick(7)} value={state[7]} />
           <Box onClick={()=> hadleClick(8)} value={state[8]} />
         </div>
         </>)}
           
    </div>
    )
  
}

export default Board;