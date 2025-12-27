import jwt from 'jsonwebtoken';

export const refreshJWTChecker = async (req,res,next) => {
    try{
        const token = req.headers.authorization?.split(" ")[1];
        if(token) {
            const decoded = jwt.verify(token,process.env.JWT_SEC);
            req.user = decoded;
            next();
        }
        else return res.send("Please Login....");
    }catch(e){
        res.send(e);
    }
} 
