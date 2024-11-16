import prisma from "../DB/db.config.js" 

export const createPost = async(req,res)=>{
    const {user_id , title , description} = req.body ;
    const newpost = await prisma.post.create({
        data: {
            user_id: Number(user_id),
            title: title, 
            description: description
        }
        
    })

    return res.json({status:200 , message:"post created successfully" , newpost})
}

// updating
export const updatePost = async(req,res)=>{
    let id = req.params.id  ;
    const { title , description} = req.body ;
    await prisma.post.update({
        where : {
            id : Number(id)        // converting string to no .
        } ,
        data : {
            title , 
            description ,
        }
    })
    return res.json({status : 200 , message : "post update sucuusfully"}) ;
}

// show posts
export const postdata = async(req,res)=>{
    const posts = await prisma.post.findMany({
        include : {
            // user : true ,
            user : {
                select : {
                    name  : true ,
                }
            } ,
            comment : true ,
        }
    })
    return res.json({status : 200 , data : posts})
}

// show a particular 
export const showPost = async(req,res)=>{
    const postid = req.params.id 
    const post = await prisma.post.findFirst({
        where  : {
            id : Number(postid) 
        }
    })
    return res.json({status : 200 , data : post})
}


export const deletePost = async(req,res)=>{
    const postid = req.params.id 
    const post = await prisma.post.delete({
        where  : {
            id : Number(postid) 
        }
    })
    return res.json({status : 200 , msg : "post deleted successsfully"})
}


// for searching pehlw schema vale part m bhi chnage krna vo top m 
//previewFeatures = ["fullTextSearch"]
export const searchpost = async(req,res)=>{
    const query =  req.query.q ;
    const posts = await prisma.post.findMany({
        where : {
            description : {
                search : query ,
            }
        }
        // jiski bhi description m ye word aata hoga vo sb dedega
    })
    return res.json({status : 200 , message : "done" , posts})

}
