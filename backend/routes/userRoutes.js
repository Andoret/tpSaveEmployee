const express = require('express');

const {  postUserController} = require('../controllers/userController');
const router = express.Router();

router.post('/info',postUserController)
module.exports = router;