const mongoose = require("mongoose")
const { Schema } = mongoose;

const fields = {
    number: { 
        type: Number, 
        required: true,
    },
    cci: { 
        type: Number, 
        required: true,
    },
}

const references = {
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    bank: {
        type: Schema.Types.ObjectId,
        ref: 'Bank',
        required: true,
    }
}

const BankAccountUserSchema = Schema(Object.assign(fields, references), { timestamps: true });

module.exports = {
    BankAccountUser: mongoose.model('BankAccountUser', BankAccountUserSchema),
    fields,
    references
  };