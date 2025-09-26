import express from "express";
import { getMainPost, getMainPosts, createMainPost, updateMainPost, deleteMainPost } from "../controllers/mainpostController.js";

const router = express.Router()

router.get('/', getMainPosts)

router.get('/:id', getMainPost)

router.post('/', createMainPost)

router.patch('/:id', updateMainPost)

router.delete('/:id', deleteMainPost)

export default router