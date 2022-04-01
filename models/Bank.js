const mongoose = require("mongoose")

const BankSchema = new mongoose.Schema({
    name: { type: String },
    value: { type: Number },
    image: { type: String },
    description: { type: String }
})

module.exports = mongoose.model("Bank", BankSchema)