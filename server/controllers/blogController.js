const Blog = require("../models/blogSchema.js");

const addBlog = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getBlog = async (req, res) => {
  try {
    const response = await Blog.find( req.body.heading );
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { addBlog, getBlog };
