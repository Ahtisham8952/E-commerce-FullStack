import multer from "multer";

// Use memory storage to keep files in memory
const storage = multer.memoryStorage();

export const upload = multer({ storage: storage });
