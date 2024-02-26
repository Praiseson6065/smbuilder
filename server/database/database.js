const { default: mongoose } = require("mongoose")

const connectToDb= async ()=>{
    try{
        // console.log(process.env.DBURL);
        const connect = await mongoose.connect(process.env.DBURL,{
            
        });
        console.log("Db Connected")
    }
    catch(error){
        console.error(error)  
        process.exit(1);  
    }
}
module.exports = connectToDb