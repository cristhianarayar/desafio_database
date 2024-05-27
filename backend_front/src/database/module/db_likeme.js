const { database } = require('../config')

const writeLikeme = async () => {
    try{     
        const sql = "SELECT * FROM posts"
        const {rows} = await database.query(sql) 

        if(rows.length){
            return rows
        }else{
            return []
        }
        
    } catch(error){

        throw error

    }
}
const addLikeme = async (titulo,imgSrc,descripcion) => {
    
    try{
        
        const value = [titulo,imgSrc,descripcion,0]
        const sql = "INSERT INTO posts values (DEFAULT,$1,$2,$3,$4) RETURNING *"
        const result = await database.query(sql,value)
        
        if (result.rowCount){
            return {
                msg: "Se agregaron los datos satisfactoriamente", 
                data: result.rows[0]
            }
        }else{
            return {
                msg: "No se ha podido agregar la información", 
                data: result.rows[0]
            } 
        }

    }catch(error) {
        
        throw error

    }
}

const removeLikeme = async (id) => {
    try{
        
        const value = [id]
        const sql = "DELETE FROM posts WHERE id = $1 RETURNING *"
        const result = await database.query(sql,value)
        if (result.rowCount){
            return {
                msg: "Se eliminó satisfactoriamente", 
                data: result.rows[0]
            }
        }else{
            return {
                msg: "No se ha podido eliminar la información", 
                data: result.rows[0]
            } 
        }
    }catch(error) {
        
        throw error

    }
}

const updateLikeme = async (id) =>{
    try{
        
        const value = [id]
        const sql = "UPDATE posts SET likes = likes + 1 WHERE id = $1"
        const result = await database.query(sql,value)
        if (result.rowCount){
            return {
                msg: "Se actualizo el like satisfactoriamente", 
                data: result.rows[0]
            }
        }else{
            return {
                msg: "No se ha podido actualizar la información", 
                data: result.rows[0]
            } 
        }
    }catch(error) {
        
        throw error

    }
}

const ds_likeme = {addLikeme,writeLikeme,removeLikeme,updateLikeme}

module.exports = {ds_likeme} 