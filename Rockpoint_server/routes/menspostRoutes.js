import express from 'express'
import {getMensPosts, getMensPost, createMensPost, updateMensPost, deleteMensPost} from '../controllers/menspostController.js'

const router = express.Router()

router.get('/', getMensPosts)

router.get('/:id', getMensPost)

router.post('/', createMensPost)

router.patch('/:id', updateMensPost)

router.delete('/:id', deleteMensPost)

export default router