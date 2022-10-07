const Expense = require('../models/expense')

exports.addExpense = async(req,res)=>{
    try{
        const {expense, description,category} = req.body;
    
    console.log(expense , description,category)
  const details = await Expense.create({expense , description , category})
   res.status(201).json({success:true, message : details})
    }
    catch (err){
       return res.status(500).json({success:false,message:"failed"})
    }

}

exports.getdetails =async(req,res,next)=>{
    Expense.findAll()
    .then(response=>{
     res.status(200).json({response})
    })
    .catch(err=> res.status(500).json(err))
}

exports.deletedetails=(req,res,next)=>{
    const id = req.params.id;
    Expense.destroy({where:{id:id}})
    .then(response=> res.status(200).json({msg:'successful'}))
        .catch(err=>{console.log(err)})
}