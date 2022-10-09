const express = require('express')
const router = express.Router();

const usercontroller = require('../controllers/user')
const expensecontroller = require('../controllers/expense')
const userauthenticate = require('../middleware/Auth')
const purchasecontroller = require('../controllers/purchase')

router.post('/signup',usercontroller.signup)

router.post('/login',usercontroller.login)

router.post('/addExpense',userauthenticate.authenticate,expensecontroller.addExpense)

router.get('/getdetails',userauthenticate.authenticate,expensecontroller.getdetails)

router.delete('/deleteInfo/:id',userauthenticate.authenticate, expensecontroller.deletedetails)

router.get('/purchase',userauthenticate.authenticate,purchasecontroller.purchasepremium)

router.post('/updatepurchase',userauthenticate.authenticate, purchasecontroller.updateTransactionStatus)

router.get('/AllUsers',userauthenticate.authenticate,expensecontroller.getAllUsers)

router.get('/AllExpense/:id',expensecontroller.getAllExpenses)


module.exports= router ;