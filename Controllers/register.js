const User = require("../config/Model/userModel.js");

exports.register = async(req , res) =>{
    try {
        const {name , email , password} = req.body ;

        if(!name || !email || !password){
            throw new Error("NAME EMAIL AND PASSWORD REQUIRED ")
        }

        const userExist = User.findOne({email});

        if(userExist){
            throw new Error("USER ALREADY EXISTS  ");
        }

        const user = await User.create({name , email , password});

        res.status(200).json(
            {
                "message" : "User Registered Successfully"
            }
        )
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