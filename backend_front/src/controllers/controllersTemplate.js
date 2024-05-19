const  {ds_likeme} = require ('../database/module/db_likeme')

const getCtrLikeme = async (req,res,next) => {
    
    try {

        const response = await ds_likeme.writeLikeme()
        res.send(response)
        
    } catch (error) {
        next(error)
    }
 
}

const postCtrLikeme = async (req,res,next) => {

    try {
        const {titulo,url,descripcion} = req.body
        
        const response = await ds_likeme.addLikeme(titulo,url,descripcion)
        res.send(response)

    } catch (error) {
        next(error)
    }
}

module.exports = {getCtrLikeme,postCtrLikeme}