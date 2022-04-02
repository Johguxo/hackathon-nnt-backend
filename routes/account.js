const express = require("express")
const router = express.Router();
const Bank = require("../models/Bank")
const {BankAccountUser} = require("../models/BankAccountUser");
const User = require("../models/User");
const {Transaction} = require("../models/Transaction");



//ListBankAccountUser
router.get("/banks", async (req, res) => {
    try {
        const listBanks = await Bank.find().all()
        res.status(200).json(listBanks);
    } catch (error) {
        res.status(500).json(error);
    }
})


//ListBankAccountUser
router.get("/bank_account", async (req, res) => {
    try {
        const user = await User.findById(req.query.id_user)
        const listBankAccounts = await BankAccountUser.find({ user:user._id }).populate('bank')
        
        res.status(200).json(listBankAccounts);
    } catch (error) {
        res.status(500).json(error);
    }
})

//RegisterBankAccountUser
router.post("/bank_account/register", async (req, res) => {
    const newBankAccountUser = new BankAccountUser({
        user: req.body.user,
        number: req.body.number,
        cci: req.body.cci,
        bank: req.body.bank
    });
    try {
        const bank_account_user = await newBankAccountUser.save();
        res.status(200).json(bank_account_user);
    } catch (error) {
        res.status(500).json(error);
    }
})

//RegisterTransaction
router.post("/transaction/register", async (req, res) => {
    const newTransaction = new Transaction({
        user: req.body.user,
        amount: req.body.amount,
        description: req.body.description,
        type: req.body.type,
        bank_account: req.body.bank_account
    });
    try {
        const transaction = await newTransaction.save();
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json(error);
    }
})

//ListTransaction
router.get("/transactions", async (req, res) => {
    try {
        const user = await User.findById(req.query.id_user)
        const listTransactions = await Transaction.find({ user:user._id }).populate({
            path: 'bank_account',
            populate: {
                path: 'bank'
            }
        })
        res.status(200).json(listTransactions);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;