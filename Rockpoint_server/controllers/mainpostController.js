import mongoose from "mongoose";
import { mainpostModel } from "../models/mainpostModel.js";

//get all posts
export const getMainPosts = async (req, res) => {
  try {
    const posts = await mainpostModel.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

//get a single post
export const getMainPost = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  try {
    const post = await mainpostModel.findById(id);
    if (!post) {
      return res.status(404).json({ error: "Posts not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

//create a new post
export const createMainPost = async (req, res) => {
  const { title, image, author, content } = req.body;

  try {
    const post = await mainpostModel.create({ title, image, author, content });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//update a post
export const updateMainPost = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  

  try {
    const post = await mainpostModel.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );

    if (!post) {
      return res.status(404).json({ error: "No such post" });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to update post" });
  }
};

//delete a post
export const deleteMainPost = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID" });
      }
      
    try {
      const post = await mainpostModel.findOneAndDelete(
        { _id: id },
      );
  
      if (!post) {
        return res.status(404).json({ error: "No such post" });
      }
  
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: "Failed to delete post" });
    }
  };
  