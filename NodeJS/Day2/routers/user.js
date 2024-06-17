const express = require('express');


const userController = require('../controllers/user');

const router = express.Router();

// /user/register

router.post('/register',userController.register);

// /user/get
router.post('/get',userController.get);

// /user/update
router.post('/update',userController.update);

// /user/delete
router.post('/delete',userController.delete);

module.exports = router;  


