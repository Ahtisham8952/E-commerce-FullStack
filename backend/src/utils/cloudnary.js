import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';

// Cloudinary configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (fileBuffer) => {
    try {
        if (!fileBuffer) return null;
        
        return new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream({ resource_type: "auto" }, (error, result) => {
                if (error) return reject(error);
                resolve(result);
            });

            streamifier.createReadStream(fileBuffer).pipe(stream);
        });
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        throw new Error("Failed to upload file");
    }
};

export { uploadOnCloudinary };
