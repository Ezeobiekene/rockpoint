import express from "express";
import { getyouthsPost, getyouthsPosts, createyouthsPost, updateyouthsPost, deleteyouthsPost } from '../controllers/youthspostController.js'

const router = express.Router()

router.get('/', getyouthsPosts)

router.get('/:id', getyouthsPost)

router.post('/', createyouthsPost)

router.patch('/:id', updateyouthsPost)

router.delete('/:id', deleteyouthsPost)

export default router