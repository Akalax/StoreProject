const express=require("express");
const bodyparser=require("body-parser");
const router=require("./route");
const app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use("/",router)
app.listen(3000||process.env.PORT,()=>console.log("App is Running on 3000"))