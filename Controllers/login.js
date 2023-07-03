const User = require("../config/Model/userModel.js");


exports.login = async(req , res) => {
    try {
        const {email , password} = req.body ;

        if( !email || !password){
            throw new Error("NAME EMAIL AND PASSWORD REQUIRED ")
        }
         const userData = await User.findOne({email});
         
     
         if(userData){           
               if(password === userData.password)  {
                    res.status(200).json({
                        "message" : "user logged successfully"
                    })
               } 
               else{
                res.status(500).json(
                    {
                        "message" : "invalid email and password"
                    }
                )   
               }      
         }
         else{
            res.status(500).json(
                {
                    "message" : "invalid email and password"
                }
            ) 
         }
    } catch (error) {
        console.log(error.message);
        res.status(500).json(
            {
                message : "Internal server error",
                error :  error.message ,
            }
        )
    }
}