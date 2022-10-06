const express = require('express')

const expense = express();

const cors = require('cors')

const bodyparser = require('body-parser')

const sequelize = require('./util/database')

const userRoutes = require('./routes/expense')

const product = require('./models/user')


expense.use(cors())

expense.use(bodyparser.json());

expense.use(userRoutes);

sequelize
//.sync({force:true})
.sync()
.then(result =>{
    expense.listen(3000)
})
.catch(err=>
    console.log(err))
