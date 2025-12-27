import express from "express";
import user from "../models/userModels.js";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.VITE_GOOGLE_CLIENT_ID);
const router = express.Router();

router.post("/auth/google", async (req, res) => {
  try {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.VITE_GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    console.log(payload.email);
    let isUser = await user.findOne({email:payload.email});
    if(!isUser){
         isUser = await user.create({
            name:payload.name,
            email:payload.email
         });
    }
    const jwtToken = jwt.sign(
      { email: isUser.email, name: isUser.name },
      process.env.JWT_SEC,
      { expiresIn: "30D" }
    );
    const {_id} = isUser;
    res.send({ jwtToken,payload , _id});
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

export default router;
