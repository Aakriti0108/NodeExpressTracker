const express = require('express')

const expense = express();

const cors = require('cors')

const bodyparser = require('body-parser')

const sequelize = require('./util/database')

const userRoutes = require('./routes/expense')

const expenseRoutes = require('./routes/expense')

const product = require('./models/user')

const expenseProducts = require('./models/expense')

expense.use(cors())

expense.use(bodyparser.json());

expense.use(userRoutes);
expense.use(expenseRoutes);

sequelize
//.sync({force:true})
.sync()
.then(result =>{
    expense.listen(3000)
})
.catch(err=>
    console.log(err))
