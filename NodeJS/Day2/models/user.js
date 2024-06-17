const db = require('../util/database');


module.exports.insert = async(userData) =>{
 //   console.log(userData.name)
  
    let id = "";
    try{
    let query = "INSERT INTO `users`(`name`,`email`, `password`, `remark`) VALUES (?,?,?,?) ";

     //execute
      let result = await db.execute(query,[ userData.name, userData.email, userData.password, userData.remark ]);
      id = result[0].insertId;
      console.log(result);

    }catch(error){ 
        
        console.log(error);
        
    }  
    return id;

    
}


module.exports.get = async(userData) =>{
    
    let retData = "";
    try{
    let query = "SELECT * FROM `users` WHERE id = ? ";

     //execute
      let result = await db.execute(query,[ userData.id]);
      retData = result[0][0];

    }catch(error){ 
        
        console.log(error);
        
    }  
   return retData;

    
}

module.exports.update = async(userData) =>{
  
    try{
    let query = "UPDATE `users` SET `password`=?  WHERE id = ? ";

     //execute
       await db.execute(query,[ userData.password,  userData.id]);
      return true;

    }catch(error){ 
        
        console.log(error);
        
        return false;
    }  

    
}


module.exports.delete = async(userData) =>{
  
    try{
    let query = "DELETE FROM `users` WHERE id = ? ";

     //execute
       await db.execute(query,[   userData.id]);
      return true;

    }catch(error){ 
        
        console.log(error);
        
        return false;
    }  

    
}