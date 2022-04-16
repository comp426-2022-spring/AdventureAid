const mongoose = require( mongoose );
const { Schema } = mongoose;
var userSchema = new mongoose.Schema({
    _id:   {    type:String,
                lowercase:true},
    firstname:  String,
    vaccinations:{  malaria: {type:Boolean, default:false},
                    hepatitisA:Boolean,
                    hepatitisB:Boolean,
                    yellowFever:Boolean,
                    tyfoid:Boolean,
                    dtp:Boolean,
                    cholera:Boolean
    },
    languages:[String]
});

module.exports = mongoose.model(
     'user', userSchema, 'Users' );


