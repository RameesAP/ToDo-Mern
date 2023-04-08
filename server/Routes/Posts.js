import express from 'express'
import { completed, createPost, deletePost, getAllPosts } from '../controllers/Posts.js';
const router=express.Router();


router.post('/create',createPost)
router.get('/getall',getAllPosts)
router.delete('/delete/:id',deletePost)
router.get('/complete/:id',completed)

export default router