import { useState } from "react";

export default function Counter(){
 function sum(){
        setCount(Count+1);
    }
  
   let [Count,setCount]=useState(0);
    return(
        <div>
          <p>count={Count}times</p>
          <button onClick={sum}>clik me</button>
        </div>
    );
}