const Sequelize = require("sequelize");
const  sequelize  = require("../util/database");

const ExpenseTracker = sequelize.define('Expense-Tracker',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        
    },
    password:Sequelize.STRING
})

module.exports = ExpenseTracker
