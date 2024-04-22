const router = require('express').Router();
const { getAllUsers, getOneUser, deleteUser, createUser, updateUser} = require('../controller/usersController');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getOneUser).delete(deleteUser).put(updateUser);

module.exports = router