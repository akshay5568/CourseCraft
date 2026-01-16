import express from "express";
import { refreshJWTChecker } from "../middleware/middleware.js";
import crypto from "crypto";
import Razorpay from "razorpay";
import RazorPay from '../models/RazorpayModel.js';

const router = express.Router();

router.get("/create-order", refreshJWTChecker, async (req, res) => {
  try {
    const data = req.query;

    const isAlreadyPurchased = await RazorPay.findOne({
        userID:data?.userID
    })
    if(isAlreadyPurchased) return res.send(true);
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await razorpay.orders.create({
      amount: data.price * 100, // INR to paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    });
    res.json(order);
  } catch (error) {
    res.json("Error", error);
  }
});

router.post("/verify", refreshJWTChecker, async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body.response;


    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = await crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");
    
   
    if (expectedSignature === razorpay_signature) {
        const purchasedCourse = await RazorPay.create({
            courseID:req.body.id,
            userID:req.body.userID,
            razorpay_order_id:razorpay_order_id
    })
      res.json({ success: true , purchasedCourse:purchasedCourse});
    } else {
      res.status(400).json({ success: false });
    }
  } catch (error) {
    res.json("Error", error);
  }
});
export default router;
