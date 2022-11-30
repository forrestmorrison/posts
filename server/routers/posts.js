const express = require('express')
const postsController = require('../controllers/posts')
const router = express.Router()

router.get('/', postsController.getAllPosts)

// router.get('/:id', usersController.getUserById)

router.post('/', postsController.createPost)

module.exports = router