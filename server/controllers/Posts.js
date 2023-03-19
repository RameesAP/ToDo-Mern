import todoModels from '../models/todo.js'

export const createPost = async (req, res) => {
    const newPost = new todoModels(req.body)

    try {
        await newPost.save()
        res.status(200).json(newPost)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getAllPosts = async (req, res) => {

    try {
        const posts = await todoModels.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const deletePost = async (req, res) => {
    const id = req.params.id
    try {
        const post = await todoModels.findById(id)
        await post.deleteOne()
    } catch (error) {
        res.status(500).json(error)
    }

}
