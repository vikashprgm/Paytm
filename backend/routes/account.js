const express=require('express');
const { authMiddleware } = require('../middleware');
const { Account, User } = require("../db");
const { default: mongoose } = require('mongoose');
const router=express.Router();


router.get("/balance",authMiddleware, async(req,res)=>{
    
    const account=await Account.findOne({userId : req.userId}).populate("userId","firstname")
    if(!account) return res.status(404).json({message : "Account not Found"})
    const parsedbalance=account.balance.toFixed(2);
    
    res.json({
        balance : parsedbalance,
        firstname : account.userId.firstname
    })
})

router.post("/transfer",authMiddleware,async(req,res)=>{
    const session = await mongoose.startSession();
    session.startTransaction();

    //parent account
    const {amount,to}=req.body;
    const account=await Account.findOne({
        userId : req.userId
    })

    if(!account || account.balance<amount){
        await session.abortTransaction();
        return res.status(400).json({
            message : "Insufficient Balance"
        })
    }

    //child account
    const toAccount= await Account.findOne({
        userId : to
    })

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid Target account"
        });
    }

    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();
    res.json({
        message: "Transfer successful"
    });
})

module.exports=router