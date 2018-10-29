let mongoose=require('mongoose');
let bcrypt=require("bcryptjs");


let UserSchema=mongoose.Schema({
	name:{
		type:String,
		index:true,
		
	},
	email:{
		type:String
		
	},
	
	contact:{
		type:Number,

	}

});

let User=module.exports=mongoose.model('User',UserSchema);

module.exports.createUser=function(newUser,callback){
	bcrypt.genSalt(10,function(err,salt){
		bcrypt.hash(newUser.password,salt,function(err,hash){
			newUser.password=hash;
			newUser.save(callback);
		});
	});
}
