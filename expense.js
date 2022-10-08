const express = require('express')

const expense = express();

const cors = require('cors')

const bodyparser = require('body-parser')

const sequelize = require('./util/database')

const userRoutes = require('./routes/expense')

const expenseRoutes = require('./routes/expense')

const user = require('./models/user')

const expenseProducts = require('./models/expense')

const orderModels = require('./models/order')

expense.use(cors())

expense.use(bodyparser.json());

expense.use(userRoutes);
expense.use(expenseRoutes);

user.hasMany(expenseProducts)
expenseProducts.belongsTo(user)

user.hasMany(orderModels)
orderModels.belongsTo(user)


sequelize
//.sync({force:true})
.sync()
.then(result =>{
    expense.listen(3000)
})
.catch(err=>
    console.log(err))
