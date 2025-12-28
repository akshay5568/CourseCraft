import express from 'express';
import becomeInstructor from '../models/BecomeInstructorModel.js';
import { refreshJWTChecker } from '../middleware/middleware.js';

const router = express.Router();

router.post('/become-seller', refreshJWTChecker ,async (req,res) => {
    try{
        const data = req.body;
        const isUser = await becomeInstructor.findOne({email:data.email});
        if(isUser) return res.send(isUser);
        const newSellerUser = await becomeInstructor.create({
            name:data.name,
            email:data.email,
            normalAccountID:data._id,
        })
        if(!newSellerUser) return res.send("Something went wrong... try Again.....");
        res.send(newSellerUser);
    }
    catch(e){
        res.send(e);
    }
})


router.post('/refresh-seller',refreshJWTChecker, async (req,res) => {
    try{
         const data = req.body;
         const isUser = await becomeInstructor.findOne({email:data.email});
         console.log(isUser);
         if(isUser == null) return res.send("please sign up as a seller account.");
         res.send(isUser);
    }
    catch(e) {
        res.send(e);
    }
})


export default router;