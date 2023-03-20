import express from 'express'
import { completed, createPost, deletePost, getAllPosts } from '../controllers/Posts.js';
const router=express.Router();


router.post('/',createPost)
router.get('/',getAllPosts)
router.delete('/:id',deletePost)
router.put('/:id',completed)

export default router