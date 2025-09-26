import express from "express";
import { getLadiesPost, getLadiesPosts, createLadiesPost, updateLadiesPost, deleteLadiesPost } from '../controllers/ladiespostController.js'

const router = express.Router()

router.get('/', getLadiesPosts)

router.get('/:id', getLadiesPost)

router.post('/', createLadiesPost)

router.patch('/:id', updateLadiesPost)

router.delete('/:id', deleteLadiesPost)

export default router