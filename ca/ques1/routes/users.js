let express=require('express');
let router=express.Router();

let User=require('../models/user'); 

router.get('/',(req,res)=>{
	res.render('index');
})
router.get('/registration',(req,res)=>{
	res.render('register');
});

router.post('/register',(req,res)=>{
	let name=req.body.name;
	let email=req.body.email;
	let contact=req.body.contact;
	
		let newUser=new User({
			name:name,
			email:email,
			contact:contact,
		});
		User.createUser(newUser,function(err,user){
			if(err) throw err;
			console.log(user);
		});
		
	res.render('index',{fname:req.body.name});
});


module.exports=router;
