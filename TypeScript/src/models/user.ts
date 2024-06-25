


const addusertoDB = (username: string, password: string, age: number) => {
    console.log(username, password, age);
    return "User Registration done";

}
interface user{
    id: number,
    uname: string,
    password: string,
    age: number
}

const updateuserdata = (objuser:user) => {

    console.log(objuser.uname);
    return "Update Done!";

}

export {addusertoDB,updateuserdata};