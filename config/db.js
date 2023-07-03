const mongoose = require("mongoose");


const dbConnect = async() =>{
    
        await mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("DB ka Connection is Successful"))
        .catch((error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);        
        process.exit(1);
        })
    
}
//      exporting dbconnect function
module.exports = dbConnect ;