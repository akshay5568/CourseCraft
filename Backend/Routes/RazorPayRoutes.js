import express from "express";
import { refreshJWTChecker } from "../middleware/middleware.js";
import crypto from "crypto";
import Razorpay from "razorpay";
import RazorPay from "../models/RazorpayModel.js";
import CourseUpload from "../models/CourseSchemaModel.js";
import VideoCourse from "../models/VideoCourseModel.js";
import path from "path";
import mongoose from "mongoose";

const router = express.Router();

router.get("/create-order", refreshJWTChecker, async (req, res) => {
  try {
    const data = req.query;

    const isAlreadyPurchased = await RazorPay.findOne({
      userID: data?.userID,
      courseID: data?.courseID,
    });
    if (isAlreadyPurchased) return res.send(true);
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
        courseID: req.body.id,
        userID: req.body.userID,
        razorpay_order_id: razorpay_order_id,
      });
      const course = await CourseUpload.findById(req.body.id);
      course.updateOne({
        enrolledStudents: course.enrolledStudents.push(req.body.userID),
      });
      course.save();
      res.json({ success: true, purchasedCourse: purchasedCourse });
    } else {
      res.status(400).json({ success: false });
    }
  } catch (error) {
    res.json("Error", error);
  }
});

router.get("/users-bought-courses", refreshJWTChecker, async (req, res) => {
  try {
    const userData = req.query;
    const allPurchasedCourses = await RazorPay.find({
      userID: userData?.userId,
    }).populate({
      path: "courseID",
      populate: {
        path: "videoDBId",
      },
      populate: {
        path: "sectionIds",
      },
    });
    res.send(allPurchasedCourses);
  } catch (error) {
    res.send("Error", error);
  }
});

router.post("/track-video", refreshJWTChecker, async (req, res) => {
  try {
    const { videoID, userID, courseId } = req.body;

    const videoData = await RazorPay.findOne({
      courseID: new mongoose.Types.ObjectId(courseId),
      userID: new mongoose.Types.ObjectId(userID),
    });


    if (!videoData) {
      return res.status(404).send("No video data found");
    }

    const alreadyWatched = videoData.watchedVideosId?.includes(videoID);

    if (alreadyWatched) {
      await RazorPay.findByIdAndUpdate(videoData._id, {
        $pull: { watchedVideosId: videoID },
      });
    } else {
      await RazorPay.findByIdAndUpdate(videoData._id, {
        $push: { watchedVideosId: videoID },
      });
    }

    const updatedResult = await RazorPay.findOne({
      courseID: courseId,
      userID: userID,
    });

    return res.status(200).json(updatedResult);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Something went wrong with server...");
  }
});

export default router;
