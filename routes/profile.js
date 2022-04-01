const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");
const User = require("../models/User");
const CryptoJS = require("crypto-js");


// Get
router.get("/", async (req, res) => {
    try {
        const user = await User.findById(req.query.id_user);
        const profile = await Profile.findOne(
             { user: user._id});
        const { password, ...info } = user._doc;
        const response = {
            profile: profile,
            user: info
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Update
router.put("/:id", async (req, res) => {
    try {
        const updateProfile = await Profile.findByIdAndUpdate(
            console.log(req.body),
            req.params.id,
            {
            $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updateProfile);
        } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;