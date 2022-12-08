const express = require('express')
const postsController = require('../controllers/posts')
const { authenticate } = require('../middleware')
const router = express.Router()

router.get('/', authenticate, postsController.getAllPosts)

// router.get('/:id', usersController.getUserById)

router.post('/', authenticate, postsController.createPost)

module.exports = router