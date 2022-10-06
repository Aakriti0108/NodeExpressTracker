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

exports.login=(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
   
    console.log(password)
    if(email == undefined || email.length === 0 || password == undefined || password.length === 0)
    {
    return res.status(400).json({err:"bad parameters . something is missing"})
    }

    user.findAll({where:{email:email}})
    .then(user=>{
        console.log(user)
        if(user[0].password == password)
        {
            res.status(200).json({message:"successful logined"})
        }
        else{
            res.status(500).json({message:"incorrect password"})
        }
    })
    .catch(err =>{
        res.status(404).json({message:"user doesn't exist",err})
    })
}