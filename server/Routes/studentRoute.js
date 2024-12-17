


const express = require("express");
const route = express.Router()


const stuController = require("../Controllers/studentController")

route.post("/studentSave",stuController.stuSave)
route.get("/studentDisplay",stuController.studentDisplay)
route.post("/studentSearch",stuController.studentSearch)
route.post("/studentDelete",stuController.studentDelete)
route.post("/studentEdit",stuController.studentEdit)
route.post("/studentUpdate",stuController.studentUpdate)
route.post("/adminSave",stuController.adminSave)
route.post("/adminLogin",stuController.adminLogin)
route.post("/productDetail",stuController.productDetail)

module.exports=route;