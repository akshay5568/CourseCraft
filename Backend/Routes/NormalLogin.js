import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import user from "../models/userModels.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const data = req.body;
    let isUser = await user.findOne({ email: data.email });
    if (isUser)
      return res.send("User Already Registerd Please Login").status(400);
    const hassPass = await bcrypt.hash(data.password, 10);
    isUser = await user.create({
      email: data.email,
      name: data.name,
      password: hassPass,
    });
    const jwtToken = jwt.sign(
      { email: data.email, name: data.email },
      process.env.JWT_SEC, {expiresIn:"30D"}
    );

    const {email,name, _id} = isUser;
    res.send({ jwtToken, email,name,_id }).status(200);
  } catch (e) {
    res.send(e);
  }
});

router.post("/login", async (req, res) => {
  try {
    const data = req.body;
    let isUser = await user.findOne({ email: data.email });
    if (isUser == null)
      return res
        .send("You are google sign in user please use google login")
        .status(200);
        
    if (isUser.email != data.email)
      return res.send("User Not SignUp Please first SignUp").status(400);

    const isPass = await bcrypt.compare(data.password, isUser.password);
    if (!isPass) {
      return res.send("User Details is invalid please try again");
    }

    const jwtToken = jwt.sign(
      { email: isUser.email, name: isUser.name },
      process.env.JWT_SEC,
      {expiresIn:"30D"}
    );
    const {email,name, _id} = isUser;
    res.send({ jwtToken, email,name, _id }).status(200);
  } catch (e) {
    res.send(e);
  }
});

export default router;
