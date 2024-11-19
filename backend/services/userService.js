const pool = require('../config/database.js');

const postUserService= async(obj)=>{
    const {name,lastName,email}=obj
    if(!email ||!name ||!lastName){
        const response= false
        return response
    }
    try{
      const [response]=await pool.execute('INSERT INTO tp_empleados_2023 (first_name,last_name,email) VALUES (?,?,?)',
        [name,lastName,email]
      )
      console.log('usuario insertado:')
      return response;
    }catch(err){
      console.error('Error al insertar el usuario:', err);
      throw err; // Lanza el error si algo falla
    }
   
}

module.exports={postUserService};