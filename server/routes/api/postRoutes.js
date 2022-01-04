const router = require('express').Router();

const { addPost, updatePost, deletePost } = require('../../controllers/PostController');


router.route('/').post(addPost);
router.route('/:id').put(updatePost);
router.route('/:id').delete(deletePost);

module.exports = router;