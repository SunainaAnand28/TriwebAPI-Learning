import React,{useState} from "react";
import {useNavigate} from  "react-router-dom";
import axios from "axios";


const Adduser=()=>{
    const Navigate = useNavigate();
    const [userName ,setuserName] = useState("");
    const [mobile,setmobile] = useState("");
    console.log("user and mobile",userName,mobile);

    const adduserHandler = () => {
        let payload= {
            userName,
            mobile, 
        }

        axios.post("http://localhost:3000/",payload)
        .then((res) => {
            console.log(res);
        })
    }
    

    return  ( <> 
     <button onClick={()=> Navigate("/")} >Home Page</button>
     <button onClick={()=> Navigate("/edituser")} >Edit User</button>
     <div  >Add User</div>

     <br/>
     <br/>

     <label>Username</label>
     <input type="text" 
     value = {userName} 
     onChange={(e) => setuserName(e.target.value)

     } />

     <label>Mobile</label>
     <input type="text" 
     value = {mobile} 
     onChange={(e) => setmobile(e.target.value)

     } />
     <button onClick={adduserHandler}>Add User</button>


    </>
    );


}

export default Adduser;