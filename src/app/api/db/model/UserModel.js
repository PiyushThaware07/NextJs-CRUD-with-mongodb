const mongoose = require("mongoose");

// Creating Schema 
const UserSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String
})

// Creating Model
const UserModel = mongoose.models.user || mongoose.model("user", UserSchema);

export default UserModel;