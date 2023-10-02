const ErrorHandler = require('../utils/errorHandler');
const User = require('../model/userModel');
const catchAsyncError = require('../middleware/catchAsyncError');
const sendToken = require('../utils/jwtToken');
exports.register = catchAsyncError(async(req,res,next)=>{
    const {name,email,password} = req.body;

    const user = await User.create({
        name,email,password
    })

    sendToken(user,201,res)
});


exports.Login = catchAsyncError(async(req,res,next)=>{
    
    const {email,password} = req.body;

    if(!email || !password){
        return next(new ErrorHandler("Please Enter Email And Password", 400))
    }

    const user = await User.findOne({email});

    if(!user){
        return next(new ErrorHandler("Invalid Email And Passowrd", 401));
    }

    const isPassword = await user.comparePassword(password);

    if(!isPassword){
        return next(new ErrorHandler("Invalid Email And Password" , 401))
    }

    sendToken(user, 200, res)

})