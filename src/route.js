const express=require("express");
const router=express.Router();
const controller=require("./Controller/StoreCon")
router.post("/calculateTax",controller.taxCalculate);

module.exports=router;