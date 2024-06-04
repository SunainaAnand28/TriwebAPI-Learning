function validateName(username,password){
    if(username==""){
        console.log("empty name not allowed");
        return;
    }else if(password==""|| password.length<8){
            console.log("Invalid password");
            return;
         }
         console.log("succesfully validated");

}
let username = "sunaina";
let password = "12345789";
validateName(username,password);