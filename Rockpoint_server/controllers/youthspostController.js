import mongoose from 'mongoose'
import {youthspostModel} from '../models/youthspostModel.js'

//get all
export const getyouthsPosts = async (req, res) => {
    try{
        const posts = await youthspostModel.find({})

        if(posts.length === 0){
            return res.status(400).json({error: 'No posts found'})
        }

        res.status(200).json(posts)
    }catch(error){
        res.status(500).json({error: 'Failed to get all posts'})
    }
}


// get one
export const getyouthsPost = async (req, res) => {
    const id = req.params.id

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "Invalid Id"})
    }
    try{
        const post = await youthspostModel.findById(id)

        if(!post){
            return res.status(400).json({error: "No post found"})
        }

        res.status(200).json(post)
    }catch(error){
        res.status(500).json({error: "Failed to get post"})
    }

}


//create one
export const createyouthsPost = async (req, res) => {
    const {title, image, author, content} = req.body

    try{
        const post = await youthspostModel.create({title, image, author, content})
        res.status(200).json(post)
    }catch(error){
        res.status(500).json({error: 'Failed to create post'})
    }
}


//update post
export const updateyouthsPost = async (req, res) => {
    const id = req.params.id

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No post found"})
    }
    try{
        const post = await youthspostModel.findByIdAndUpdate(id, {...req.body})

        if (!post) {
            return res.status(404).json({ error: "No such post" });
          }
      
          res.status(200).json(post);
    }catch(error){
        res.status(500).json({error: "Failed to update post"})
    }
}



//delete post
export const deleteyouthsPost = async (req, res) => {
    const id = req.params.id

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No post found"})
    }
    try{
        const post = await youthspostModel.findByIdAndDelete(id)

        if (!post) {
            return res.status(404).json({ error: "No such post" });
          }
      
          res.status(200).json(post);
    }catch(error){
        res.status(500).json({error: "Failed to delete post"})
    }
}