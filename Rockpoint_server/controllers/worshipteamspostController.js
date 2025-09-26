import mongoose from 'mongoose'
import {worshipteamspostModel} from '../models/worshipteamspostModel.js'

//get all
export const getworshipteamsPosts = async (req, res) => {
    try{
        const posts = await worshipteamspostModel.find({})

        if(posts.length === 0){
            return res.status(400).json({error: 'No posts found'})
        }

        res.status(200).json(posts)
    }catch(error){
        res.status(500).json({error: 'Failed to get all posts'})
    }
}


// get one
export const getworshipteamsPost = async (req, res) => {
    const id = req.params.id

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "Invalid Id"})
    }
    try{
        const post = await worshipteamspostModel.findById(id)

        if(!post){
            return res.status(400).json({error: "No post found"})
        }

        res.status(200).json(post)
    }catch(error){
        res.status(500).json({error: "Failed to get post"})
    }

}


//create one
export const createworshipteamsPost = async (req, res) => {
    const {title, image, author, content} = req.body

    try{
        const post = await worshipteamspostModel.create({title, image, author, content})
        res.status(200).json(post)
    }catch(error){
        res.status(500).json({error: 'Failed to create post'})
    }
}


//update post
export const updateworshipteamsPost = async (req, res) => {
    const id = req.params.id

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No post found"})
    }
    try{
        const post = await worshipteamspostModel.findByIdAndUpdate(id, {...req.body})

        if (!post) {
            return res.status(404).json({ error: "No such post" });
          }
      
          res.status(200).json(post);
    }catch(error){
        res.status(500).json({error: "Failed to update post"})
    }
}



//delete post
export const deleteworshipteamsPost = async (req, res) => {
    const id = req.params.id

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No post found"})
    }
    try{
        const post = await worshipteamspostModel.findByIdAndDelete(id)

        if (!post) {
            return res.status(404).json({ error: "No such post" });
          }
      
          res.status(200).json(post);
    }catch(error){
        res.status(500).json({error: "Failed to delete post"})
    }
}