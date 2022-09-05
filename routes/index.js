const { Router } = require('express');
const router = Router()
const users = require('../middleware/users')

router
    .get('/all-users', users.allUsers)
    .get('/user/:id', users.oneUser)
    .post('/create-user', users.createUser)
    .put('/upade-user/:id', users.updateUser)
    .delete('/delete-user/:id', users.deletUser)


module.exports = router