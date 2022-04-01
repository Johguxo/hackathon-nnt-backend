const mongosse = require("mongoose")

const ProfileSchema = new mongosse.Schema({
    user: { type: String, required: true, unique: true },
    civil_status: { type: String, default:'' }, 
    date_of_birth: { type: String, default:'' },
    mobile_number: { type: Number, default:'' },
    nacionality: { type: String, default:'Perú' },
    ruc: { type: String, default:'' },
    ruc_type: { type: Number, default:'' },
    sector: { type: String, default:'' },
    arrears: { type: String, default:'' },
    credit_history: { type: String, default:'' },
    antiquity: { type: Number, default:'' },
    number_account: { type: Number, default:'' },
    net_balance: { type: Number, default:'' },
    trend: { type: Number, default:'' },
    },{ 
    timestamps: true 
});

module.exports = mongosse.model("Profile", ProfileSchema);