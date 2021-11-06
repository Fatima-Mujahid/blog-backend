import express from 'express';
import {
  getBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} from '../controllers/blogs.js';

const router = express.Router({ mergeParams: true });

//INDEX ROUTE
/**
 * @route   GET /blogs
 * @desc    Get all blogs
 */
router.get('/', getBlogs);

//CREATE ROUTE
/**
 * @route   POST /blogs
 * @desc    Create new blog
 * @body    {title, category, image, body}
 */
router.post('/', createBlog);

//SHOW ROUTE
/**
 * @route   GET /blogs/:id
 * @desc    Get blog by id
 */
router.get('/:id', getBlogById);

//UPDATE ROUTE
/**
 * @route   PUT /blogs/:id
 * @desc    Update blog by id
 * @body    {title, category, image, body}
 */
router.put('/:id', updateBlog);

//DESTROY ROUTE
/**
 * @route   DELETE /blogs/:id
 * @desc    Delete blog by id
 */
router.delete('/:id', deleteBlog);

export default router;
