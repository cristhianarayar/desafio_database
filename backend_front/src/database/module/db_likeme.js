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
        
        const value = [titulo,imgSrc,descripcion]
        const sql = "INSERT INTO posts values (DEFAULT,$1,$2,$3) RETURNING *"
        const result = await database.query(sql,value)
        
        if (result.rowCount){
            return {
                msg: "Se agregaron los datos satisfactoriamente", 
                data: result.rows[0]
            }
        }

    }catch(error) {
        
        throw error

    }
}

const ds_likeme = {addLikeme,writeLikeme}

module.exports = {ds_likeme} 