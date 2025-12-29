import express from 'express';
import { refreshJWTChecker } from '../middleware/middleware.js';
import becomeInstructor from '../models/BecomeInstructorModel.js';
import bcrypt from 'bcrypt';
import user from '../models/userModels.js';
const router = express.Router();

router.post('/delete-seller-account',refreshJWTChecker,async (req,res) => {
     try{
         const data = req.body;
         let isUser = await becomeInstructor.findOne({email:data.email});
         if(!isUser) return res.send("You are not seller useer");
         res.send(true);
     }catch(e) {
         res.send(e);
     }
})

router.post('/delete-seller-account-pass',refreshJWTChecker,async (req,res) => {
    try{
         const data = req.body;
         const id = data.userData.data._id;
         const isUser = await user.findById(id);
         const hassPass = await bcrypt.compare(data.pass,isUser.password);
         if(!hassPass) return res.send("Invalid password please enter valid password");
         const deletedSellerUser = await becomeInstructor.findOneAndDelete({email:data.userData.data.email});
         res.send(deletedSellerUser);
    }catch (e) {
        res.send(e);
    }
})


export default router;