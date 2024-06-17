const express = require('express');

const calculatorController = require('../controllers/calculator');


const router = express.Router();

// calculator/add

router.post('/add',calculatorController.add);

router.post('/subtract',calculatorController.subtract);

router.post('/product',calculatorController.product);

router.post('/division',calculatorController.division);


module.exports = router;

