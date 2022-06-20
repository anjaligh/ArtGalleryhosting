const express = require('express')
const router = express.Router();
const registerData = require('../model/registermodel')
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const checkAuth=require('../middleware/check-auth')
function verifyToken(req,res,next){

  if(!req.headers.authorization)
  {

  return res.status(401).send('Unauthorized user');
}
let token= req.headers.authorization.split(' ')[1];
if(token==null){
  return res.status(401).send('Unauthorized user');
}
let payload=jwt.verify(token, 'ICTAcademy');
console.log(payload)
if(!payload){
  return res.status(401).send('Unauthorized user');
}
req.userId=payload.subject
next()
  }

router.post('/register',(req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.json({ success: false, message: "Hashing issue" })
    }
    else {
      const user = new registerData({
        name: req.body.name,
        email: req.body.email1,
        userrole: req.body.userrole,
        password: hash,
        contactno:req.body.contactno,
        address:req.body.address

      })
      user.save()
        .then((result) => {

          res.json({ success: true, message: "User Created" })
        }).catch(err => {
          if (err.code === 11000) {

            return res.json({ success: false, message: "Email id alredy exists" })


          }
          return res.json({ success: false, message: "Authentication Failed" })

        })
    }
  })


});

router.post('/login',(req, res) => {
  //res.json("Hai");
  registerData.find({ email: req.body.email1 })
    .exec()
    .then((result) => {
      if (result.length < 1) {
        return res.json({ success: false, message: "user not found" })
      }
      const user = result[0];
      bcrypt.compare(req.body.password,user.password,(err, ret) => {
        if (ret) {
          let userrole=user.userrole;
          let username=user.name;
          let useremail=user.email
          const payload={
            userid:user._id
          }
          const token=jwt.sign(payload,'ICTAcademy');
          return res.json({ success: true, message: "Login successful",userrole:userrole,token:token,username:username,useremail:useremail})
          
        }
        else {
          return res.json({ success: false, message: "Password not matched" })
        }
      })
    }).catch(err => {
      res.json({ success: false, message: "Auth Failed" })
    });
})

router.get('/seller', verifyToken, (req, res) => {
  const userId = req.userData.userId
  

  registerData.findById(userId)
      .exec()
      .then((result) => {
          res.json({succes: true, data:result})
      }).catch(err => {
          res.json({succes: false, message: "Auth Failed"})
      })
    
})
router.get('/buyer', checkAuth, (req, res) => {
  const userId = req.userData.userId
  

  registerData.findById(userId)
      .exec()
      .then((result) => {
          res.json({succes: true, data:result})
      }).catch(err => {
          res.json({succes: false, message: "Auth Failed"})
      })
    
})
router.get('/profile',checkAuth,(req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  registerData.find()
      .then((profiles) => {
         // console.log(users)
          res.send(profiles)
      });
});
router.get('/:id', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  const id = req.params.id;
  registerData.findOne({"_id":id})
  .then((profileItem)=>{
      res.send(profileItem);
  });
})

  router.delete('/remove/:id',(req,res)=>{
   
    id = req.params.id;
    registerData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })



router.put('/update',(req,res)=>{
  console.log(req.body)
  id=req.body._id,
  //profileId= req.body.profileId,
  name = req.body.name,
  email= req.body.email,
  userrole = req.body.userrole,
 contactno= req.body.contactno,
 address=req.body.address
 registerData.findByIdAndUpdate({"_id":id},
                              {$set:{
                                //"profileId":productId,
                                "name":name,
                                "email":email,
                                "userrole":userrole,
                               "contactno":contactno,
                               "address":address}})
 .then(function(){
     res.send();
 })
})




module.exports = router;