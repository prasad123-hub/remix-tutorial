import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// console.log(process.env);

async function uploadImage(path) {
  try {
    const res = await cloudinary.uploader.upload(path, {
      folder: "News",
    });
    console.log("res", res);
    return res.secure_url;
  } catch (err) {
    console.error(err);
    return;
  }
}

module.exports = { uploadImage };
