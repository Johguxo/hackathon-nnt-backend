const mongoose = require("mongoose");
const { Schema } = mongoose;

const fields = {
    amount: { 
        type: Number,
        default: 0 
    },
    description: { 
        type: String,
        default: ''
    },
    type: { 
        type: Number,
        required: true
    },
}

const references = {
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    bank_account: {
        type: Schema.Types.ObjectId,
        ref: 'BankAccountUser',
        required: true,
    }
}

const TransactionSchema = Schema(Object.assign(fields, references), {timestamps: true})
        
module.exports = {
    Transaction: mongoose.model("Transaction", TransactionSchema),
    fields,
    references,
}