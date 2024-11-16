import prisma from "../DB/db.config.js"
// user is model here

// entry of new user
export const createUser = async (req, res) => {
    const { name, password, email } = req.body;

    // Increase the comment counter
    await prisma.post.update({
        where: {
            id: Number(post_id)
        },
        data: {
            comment_count: {
                increment: 1
            }
        }
    });

    const newuser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password
        }
    })

    return res.json({ status: 200, message: "user created successfully", newuser })
}


// updating user
export const updateUser = async (req, res) => {
    console.log(req.params);
    let id = req.params.id;
    const { name, email, password } = req.body;
    await prisma.user.update({
        where: {
            id: Number(id)        // converting string to no .
        },
        data: {
            name,
            email,
            password
        }
    })
    return res.json({ status: 200, message: "user update sucuusfully" });
}

// show userrs
export const userdata = async (req, res) => {

    const users = await prisma.user.findMany({
        // fpr selecting a particular items
        select: {
            _count: {
                select: {
                    post: true,    // Count the number of posts
                    comment: true, // Count the number of comments
                }
            }
        }
    });

    return res.json({ status: 200, data: users });
}

// show a particular user
export const showUser = async (req, res) => {
    const userid = req.params.id
    const user = await prisma.user.findFirst({
        where: {
            id: Number(userid)
        }
    })
    return res.json({ status: 200, data: user })
}

// delete user
export const deleteUser = async (req, res) => {
    const userid = req.params.id
    const user = await prisma.user.delete({
        where: {
            id: Number(userid)
        }
    })
    // Increase the comment counter
    await prisma.post.update({
        where: {
            id: Number(post_id)
        },
        data: {
            comment_count: {
                decrement: 1
            }
        }
    });
    return res.json({ status: 200, msg: "user deleted successsfully" })
}