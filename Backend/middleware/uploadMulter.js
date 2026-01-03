import multer from "multer";

const storage = multer.memoryStorage();
const uploadMulter = multer({ storage });

export default uploadMulter;
