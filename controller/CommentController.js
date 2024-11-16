import prisma from "../DB/db.config.js" 

export const createcomment = async(req,res)=>{
    const {user_id , comment , post_id} = req.body ;
    const newcomment = await prisma.comment.create({
        data: {
            user_id: Number(user_id),
            post_id: Number(post_id),
            comment ,
        }
    })
    return res.json({status:200 , message:"comment created successfully" , newcomment})
}

// updating
export const updatecomment = async(req,res)=>{
    let id = req.params.id  ;
    const {comment} = req.body ;
    await prisma.comment.update({
        where : {
            id : Number(id)        // converting string to no .
        } ,
        data : {
            comment ,
        }
    })
    return res.json({status : 200 , message : "comment update sucuusfully"}) ;
}

// show comments
export const commentdata = async(req,res)=>{
    const comments = await prisma.comment.findMany({})
    return res.json({status : 200 , data : comments})
}

// show a particular 
export const showcomment = async(req,res)=>{
    const comentid = req.params.id 
    const comment = await prisma.comment.findFirst({
        where  : {
            id : Number(comentid) 
        }
    })
    return res.json({status : 200 , data : comment})
}


export const deletecomment = async(req,res)=>{
    const comentid = req.params.id 
    const comment = await prisma.comment.delete({
        where  : {
            id : Number(comentid) 
        }
    })
    return res.json({status : 200 , msg : "comment deleted successsfully"})
}