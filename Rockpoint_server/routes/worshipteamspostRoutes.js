import express from "express";
import { getworshipteamsPost, getworshipteamsPosts, createworshipteamsPost, updateworshipteamsPost, deleteworshipteamsPost } from '../controllers/worshipteamspostController.js'

const router = express.Router()

router.get('/', getworshipteamsPosts)

router.get('/:id', getworshipteamsPost)

router.post('/', createworshipteamsPost)

router.patch('/:id', updateworshipteamsPost)

router.delete('/:id', deleteworshipteamsPost)

export default router