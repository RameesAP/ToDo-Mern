import express from 'express'
import { createPost, deletePost, getAllPosts } from '../controllers/Posts.js';
const router=express.Router();


router.post('/',createPost)
router.get('/',getAllPosts)
router.delete('/:id',deletePost)

export default router