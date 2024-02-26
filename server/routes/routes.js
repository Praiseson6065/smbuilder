
const userAuth = require('./authRoute') ;
const infoRoute = require('./infoRoute')

const SetupRoutes=(app)=>{
    
    app.get('/',(req,res)=>{
        res.send("Hello World");
    })
    app.use("/",userAuth)
    app.use("/user/",infoRoute)
    
}
module.exports = SetupRoutes;