import mongoose from "mongoose";
import { ladiespostModel } from "../models/ladiespostModel.js";

//get all
export const getLadiesPosts = async (req, res) => {
  try {
    const posts = await ladiespostModel.find({});
    if (!posts) {
      return res.status(404).json({ error: "Posts not found" });
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

//get one
export const getLadiesPost = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  try {
    const post = await ladiespostModel.findById(id);
    if (!post) {
      return res.status(404).json({ error: "Posts not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch post" });
  }
};

//create new
export const createLadiesPost = async (req, res) => {
  const { title, image, author, content } = req.body;

  try {
    const post = await ladiespostModel.create({
      title,
      image,
      author,
      content,
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to create new post" });
  }
};

//update post
export const updateLadiesPost = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid Id" });
  }

  try {
    const post = await ladiespostModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to update post" });
  }
};

//delete post
export const deleteLadiesPost = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  try {
    const post = await ladiespostModel.findOneAndDelete({ _id: id });
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete post" });
  }
};
