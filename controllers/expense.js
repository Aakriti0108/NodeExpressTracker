const Expense = require('../models/expense')


exports.addExpense = async(req,res)=>{
    try{
        const {expense, description,category} = req.body;
    
   
  const details = await Expense.create({expense , description , category, userId: req.user.id})
   res.status(201).json({success:true, message : "successfully added"})
    }
    catch (err){
       return res.status(500).json({success:false,message:"failed"})
    }

}

exports.getdetails =async(req,res,next)=>{
    Expense.findAll({where : {userId:req.user.id}})
    .then(response=>{
     res.status(200).json({response})
    })
    .catch(err=> res.status(500).json(err))
}

exports.deletedetails=(req,res,next)=>{
    const id = req.params.id;
    Expense.destroy({where:{id:id ,userId:req.user.id}})
    .then(noofrows=>{
        if(noofrows === 0)
        {
            return res.status(404).json({success:false , message : 'Expense doesnot belong to user'})
        }
        res.status(200).json({msg:'successful'})
    })
        
        .catch(err=>{console.log(err)})
}