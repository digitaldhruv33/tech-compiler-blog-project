const { addBlog, getBlog } = require("../controllers/blogController.js")
const { addUser } = require("../controllers/userController.js")

const router = require("express").Router()


router.post('/addblog', addBlog)
router.get('/getblogs', getBlog)
router.post('/adduser', addUser)



module.exports = router