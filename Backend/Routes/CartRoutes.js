import express from 'express';
import { refreshJWTChecker } from '../middleware/middleware.js';
import cart from '../models/CartModel.js';

const router = express.Router();

router.post('/cart', refreshJWTChecker, async (req,res) => {
    try {
        const data = req.body;
        const isAlreadyInCart = await cart.find({
            courseId:data.courseId
        })
        const isAdded = isAlreadyInCart.filter(carts => carts.userId == data.userId);
        if(isAdded.length > 0) return res.send("User already added this course in his cart...");
        const cartDetails = await cart.create({
            courseId:data.courseId,
            userId:data.userId
        }) 
        res.send(cartDetails);
    } catch (error) {
        res.send("Error", error);
    }
})



router.get('/carts/user', refreshJWTChecker, async (req,res) => {
     try {
        const userId = req.query;
        const userCarts = await cart.find({
            userId:userId.id
        }).populate({
            path:"courseId",
            populate:{
                path:"createdBy",
            }
        });
        res.send(userCarts);
     } catch (error) {
        res.send(error)
     }
})



router.delete('/cart/delete/:id', refreshJWTChecker, async  (req,res) => {
     try {
        const {id} = req.params;
        const deletedCart = await cart.findByIdAndDelete(id);
        res.json({"CartDeleted":deletedCart});
     } catch (error) {
        res.send("Error", error);
     }
})
export default router;