import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Edituser = () => {

    const Navigate = useNavigate();

    const [user, setuser] = useState([]);

    const [flag, setflag] = useState(false);

    const editHandler = (e, _id, key) => {
        const editedData = user.find((item)=> item._id === _id );
        let payload = {...editedData,[key]: e.target.innerHTML};
        axios.put("http://localhost:3000/", payload).then((res)=>{
            setuser(editedData);
            setflag(!flag);
        })    
    }

    useEffect(() => {
        axios
            .get("http://localhost:3000/")
            .then((res) => {
                console.log(res)
                setuser(res.data.data)
            })
            .catch((err) => console.log(err));
    }, [flag]);


    return (<>
        <button onClick={() => Navigate("/")} >Home Page</button>
        <button onClick={() => Navigate("/adduser")} >Add User</button>
        <div>Edit User</div>

        <table className="moduleSection">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>UserName</th>
                    <th>Mobile</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                { user.length > 0 ? user && user.map((post) => {
                        return (
                            <tr key={post._id}>
                                <td>{post._id}</td>
                                <td contentEditable suppressContentEditableWarning onBlur={(e) => editHandler(e.post._id, "userName")}  >{post.userName}</td>
                                <td contentEditable suppressContentEditableWarning onBlur={(e) => editHandler(e.post._id, "mobile")}   >{post.mobile}</td>

                            </tr>
                        )
                    })
                : "no data found"}

            </tbody>
        </table>


    </>
    );

}

export default Edituser;