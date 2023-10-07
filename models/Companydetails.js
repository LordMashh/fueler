import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    fullname: {
        type: String,
        required: [true, "Please provide fullname"],
   
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    phone: {
        type: Number,
        required: [true, "Please provide a phone"],
       
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    address: {
        type: String,
        required: [true, "Please provide a address"],
        
    }
});

const User = models.User || model("User", UserSchema);

export default User;