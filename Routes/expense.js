const express = require('express')
const router = express.Router();

const usercontroller = require('../controllers/user')
const expensecontroller = require('../controllers/expense')

router.post('/signup',usercontroller.signup)

router.post('/login',usercontroller.login)

router.post('/addExpense',expensecontroller.addExpense)

router.get('/getdetails',expensecontroller.getdetails)

router.delete('/deleteInfo/:id', expensecontroller.deletedetails)

module.exports= router ;