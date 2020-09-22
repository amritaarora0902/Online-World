const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    pic:{
        type:String,
        default:'https://res.cloudinary.com/dlpfqmpuz/image/upload/v1600790427/0c3b3adb1a7530892e55ef36d3be6cb8_obpxyn.png'
    }

})

mongoose.model("User",userSchema)