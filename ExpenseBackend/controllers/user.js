const user = require('../models/user')

exports.signup = (req,res)=>{
        const {email,password} = req.body;
   
    
    if(email == undefined || email.length === 0 || password == undefined || password.length === 0)
    {
    return res.status(400).json({err:"bad parameters . something is missing"})
    }
    user.create({email,password})
    .then((result)=>{
        res.status(201).json({data:result})
    })
    .catch(err =>{
        res.status(500).json({err})
    })
}
