const {getCtrLikeme,postCtrLikeme} = require("../../controllers/controllersTemplate")
const fileroute = require('express').Router()

fileroute.get("/posts",getCtrLikeme)
fileroute.post("/posts",postCtrLikeme)

module.exports = fileroute

