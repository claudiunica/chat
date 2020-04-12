const router = require('express').Router();
const { connectedUsers } = require('../socket');
const User = require('../models/User');

router.get('/register', function checkInput(req, res) {
    const { nickname, firstName, lastName, email } = req.query;
    if (!nickname) {
        res.status(400).send({
            message: `User doesn't have a nickname`
        });
        return;

    }
    if (connectedUsers.find(user => user.nickname === nickname)) {
        res.status(409).send('User already exists');
        return;
    }
    // const id = generateUserId();
    // connectedUsers.push(new User(id, { nickname, firstName, lastName, email }));
    res.send({
        message: `User registered`
    });
})