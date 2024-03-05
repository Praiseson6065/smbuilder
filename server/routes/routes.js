
const userAuth = require('./authRoute') ;
const infoRoute = require('./infoRoute');
const requestRoute = require('./requestRoute');

const SetupRoutes=(app)=>{
    
    app.get('/',(req,res)=>{
        res.send("Hello World");
    })
    app.use("/",userAuth)
    app.use("/user/",infoRoute)
    app.use("/user/",requestRoute)
    
}
module.exports = SetupRoutes;