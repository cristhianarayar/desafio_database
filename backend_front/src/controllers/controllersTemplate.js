const  {ds_likeme} = require ('../database/module/db_likeme')

const getCtrLikeme = async (req,res,next) => {
    
    try {

        const response = await ds_likeme.writeLikeme()
        res.send(response)
        
    } catch (error) {
        console.log(error)
        next(error)
    }
 
}

const postCtrLikeme = async (req,res,next) => {

    try {
        const {titulo,url,descripcion,like} = req.body
        const response = await ds_likeme.addLikeme(titulo,url,descripcion)
        res.send(response)

    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Internal Server Error'})
        next(error)
    }
}

const deleteCtrLikeme = async (req,res,next) => {
    try {
        const {id} = req.params
        const response = await ds_likeme.removeLikeme(id)
        res.send(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Internal Server Error'})
        next(error)
    }
    
}

const updateCtrlLikeme = async (req,res,next) => {
    try {
        const {id} = req.params
        const response = await ds_likeme.updateLikeme(id)
        res.send(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Internal Server Error'})
        next(error)
    }
}

module.exports = {getCtrLikeme,postCtrLikeme,deleteCtrLikeme,updateCtrlLikeme}