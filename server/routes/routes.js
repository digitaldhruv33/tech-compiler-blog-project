const { addBlog, getBlog } = require("../controllers/blogController.js")
const { addUser, getUser } = require("../controllers/userController.js")

const router = require("express").Router()


router.post('/addblog', addBlog)
router.get('/getblogs', getBlog)
router.post('/adduser', addUser)
router.get('/login', getUser)



module.exports = router