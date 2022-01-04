const router = require('express').Router();
const { getUserById, createUser, getSingleUser, getUsers, login, updateUser, userAddActivity } = require('../../controllers/UserController');


const { authMiddleware } = require('../../utils/auth');


router.route('/').get(getUsers);
router.route('/').post(createUser);
router.route('/:id').get(getUserById);
router.route('/:id').put(updateUser);
router.route('/me').get(authMiddleware, getSingleUser);
router.route('/login').post(login);
router.route('/addactivity/:id').put(userAddActivity)


module.exports = router;