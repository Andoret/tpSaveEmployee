const {postUserService}=require('../services/userService')


const postUserController= async(req,res)=>{
    const {name,lastName,email}=req.body
    if(!name ||!lastName ||!email){
        return res.status(400).json({status:false,message:'fields require'})
    }
    try{
        console.log("hola")
        const obj = {
            name,
            lastName,
            email
        }
        const result=await postUserService(obj)
        console.log("es el resultado:",result)
        res.status(201).json({status:true,result})
    }catch(error){
        res.status(500).json({status:false, message:error})
    }
}

module.exports={postUserController}