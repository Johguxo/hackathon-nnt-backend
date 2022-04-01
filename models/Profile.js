const mongosse = require("mongoose")

const ProfileSchema = new mongosse.Schema({
    user: { type: String, required: true, unique: true },
    date_of_birth: { type: String, default:'' },
    mobile_number: { type: Number, default:'' },
    nacionality: { type: String, default:'Perú' },
    ruc: { type: String, default:'' },
    },{ 
    timestamps: true 
});

module.exports = mongosse.model("Profile", ProfileSchema);