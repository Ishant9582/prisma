import prisma from "../DB/db.config.js" 
export const createUser = async(req,res)=>{
    const {name , password , email} = req.body ;
    const finduser = await prisma.user.findUnique({
        where : {
            email : email 
        }
    })
    if(finduser){
        return res.json({status:400 , message:"email already taken"})
    }

    const newuser = await prisma.user.create({
        data : {
            name : name ,
            email : email ,
            password : password
        }
    })

    return res.json({status:200 , message:"user created successfully" , newuser})
}

export const updateUser = async(req,res)=>{
    console.log(req.params) ;
    let id = req.params.id  ;
    const {name,email,password} = req.body ;
    await prisma.user.update({
        where : {
            id : Number(id)        // converting string to no .
        } ,
        data : {
            name ,
            email ,
            password 
        }
    })
    return res.json({status : 200 , message : "user update sucuusfully"}) ;
}