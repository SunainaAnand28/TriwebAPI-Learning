import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Homepage = () => {
    const Navigate = useNavigate();
    const [user, setuser] = useState([]);
    
    const [flag,setflag] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:3000/")
            .then((res) => {
                console.log(res)
                setuser(res.data.data)
            })
            .catch((err) => console.log(err));
    }, [flag]);

    console.log("user", user);

    const deleteHandler = (_id) => {
        console.log(_id);
        let payload = {
            _id,
        };
        axios.delete("http://localhost:3000/", { data: payload })
        .then((res) => setflag(!flag))
        .catch((err) => console.log(err));
    }

    return (<>
        <button onClick={() => Navigate("/adduser")} >Add User</button>
        <button onClick={() => Navigate("/edituser")} >Edit User</button>
        <div>Home page</div>
        <br />
        <br />
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
                {
                    user && user.map((post) => {
                        return (
                            <tr key={post._id}>
                                <td>{post._id}</td>
                                <td>{post.userName}</td>
                                <td>{post.mobile}</td>
                                <td onClick={() => deleteHandler(post._id)} >Delete</td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>


    </>
    );

};

export default Homepage;