const { addBlog, getBlog } = require("../controllers/blogController.js")

const router = require("express").Router()


router.post('/addblog', addBlog)
router.get('/getblog', getBlog)

module.exports = router