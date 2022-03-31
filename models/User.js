const mongosse = require("mongoose")

const UserSchema = new mongosse.Schema({
    first_name: { type: String, required: true, unique: true },
    last_name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    },{ 
    timestamps: true 
});

module.exports = mongosse.model("User", UserSchema);