const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    shippingInfo : {
        address : {
            type : String,
            required : true
        },
        city : {
            type : String,
            required : true
        },
        state : {
            type : String,
            required : true
        },
        country : {
            type : String,
            required : true
        },
        pincode : {
            type : Number,
            required : true
        },
    },
    orderItems : [
        {
            name : {
                type : String,
                required : true
            },
            price : {
                type : String,
                required : true
            },
            quantity : {
                type : Number,
                required : true
            },
            product : {
                type : mongoose.Schema.ObjectId,
                ref : "Product",
                required : true
            }
        }
    ],

    user : {
        type : mongoose.Schema.ObjectId,
        ref : "User",
        required : true
    }
})