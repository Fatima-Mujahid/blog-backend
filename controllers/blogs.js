import Blog from '../models/blog.js';

const getBlogs = async (req, res) => {
  await Blog.find((err, blogs) => {
    if (err) {
      res.status(404).json({ message: err.message, success: false });
    } else {
      res.status(200).json({
        message: 'Blogs found successfully!',
        success: true,
        data: blogs,
      });
    }
  });
};

const createBlog = async (req, res) => {
  await Blog.create(req.body, (err, blog) => {
    if (err) {
      res.status(404).json({ message: err.message, success: false });
    } else {
      res.status(200).json({
        message: 'New blog created successfully!',
        success: true,
        data: blog,
      });
    }
  });
};

const getBlogById = async (req, res) => {
  await Blog.findById(req.params.id, (err, blog) => {
    if (err) {
      res.status(404).json({ message: err.message, success: false });
    } else {
      res.status(200).json({
        message: 'Blog found successfully!',
        success: true,
        data: blog,
      });
    }
  });
};

const updateBlog = async (req, res) => {
  await Blog.findByIdAndUpdate(
    req.params.id,
    { ...req.body, date: Date.now },
    (err, blog) => {
      if (err) {
        res.status(404).json({ message: err.message, success: false });
      } else {
        res.status(200).json({
          message: 'Blog updated successfully!',
          success: true,
          data: blog,
        });
      }
    }
  );
};

const deleteBlog = async (req, res) => {
  await Blog.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      res.status(404).json({ message: err.message, success: false });
    } else {
      res
        .status(200)
        .json({ message: 'Blog deleted successfully', success: true });
    }
  });
};

export { getBlogs, createBlog, getBlogById, updateBlog, deleteBlog };
