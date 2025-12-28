import express from 'express';
import { refreshJWTChecker } from '../middleware/middleware.js';
import user from '../models/userModels.js';
const router = express.Router();


router.post('/refresh/login', refreshJWTChecker ,async  (req,res) => {
     try{
          const isUser = await user.findOne({email:req.user.email});
          if(!isUser) return res.send("Please Login......");
          const {email,name, _id} = isUser;
          res.send({email,name, _id});
     }
     catch (e) {
          res.send(e);
     }
})


export default router;