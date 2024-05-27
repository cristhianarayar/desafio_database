const {getCtrLikeme,postCtrLikeme,deleteCtrLikeme, updateCtrlLikeme} = require("../../controllers/controllersTemplate")
const fileroute = require('express').Router()

fileroute.get("/posts",getCtrLikeme)
fileroute.post("/posts",postCtrLikeme)
fileroute.delete("/posts/:id",deleteCtrLikeme)
fileroute.put("/posts/like/:id",updateCtrlLikeme)

module.exports = fileroute

