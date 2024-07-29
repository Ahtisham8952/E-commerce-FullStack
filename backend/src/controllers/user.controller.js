import asyncHandler from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {User} from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/cloudnary.js";
import {ApiResponse} from "../utils/ApiResponse.js";



const generateAccessAndRefreshTokens= async(userId)=>{
    try {
const user =await User.findById(userId)
const accessToken=user.generateAccessToken()
const refreshToken=user.generateRefreshToken()
        user.refreshToken=refreshToken
        await user.save({validateBeforeSave:false})
        return {accessToken,refreshToken}
    } catch (error) {
        throw new ApiError(500,"something went wrong while generating refersh and access token")
    }
}

const registerUser = asyncHandler(async (req, res) => {
    const { fullName, email, username, password } = req.body;
    const avatarFile = req.file?.avatar;  // Adjust as necessary
    const coverImageFile = req.file?.coverImage; // Adjust as necessary

    // Check if required fields are provided
    if ([fullName, email, username, password].some(field => !field.trim())) {
        throw new ApiError(400, "All fields are required");
    }

    // Check if user already exists
    const existingUser = await User.findOne({
        $or: [{ username }, { email }]
    });
    if (existingUser) {
        throw new ApiError(409, "Username or email already exists");
    }

    // Upload files to Cloudinary if present
    const avatarUploadResult = avatarFile
        ? await uploadOnCloudinary(avatarFile.buffer)
        : null;
    const coverImageUploadResult = coverImageFile
        ? await uploadOnCloudinary(coverImageFile.buffer)
        : null;

    // Create new user
    const user = await User.create({
        fullName,
        avatar: avatarUploadResult?.secure_url || "", // Handle optional file
        coverImage: coverImageUploadResult?.secure_url || "", // Handle optional file
        email,
        password,
        username
    });

    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering user");
    }

    return res.status(201).json(new ApiResponse(200, createdUser, "User registered successfully"));
});
const loginUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
  
    if (!username && !email) {
      throw new ApiError(400, "Username or email is required");
    }
  
    const user = await User.findOne({
      $or: [{ email }, { username }]
    });
  
    if (!user) {
      throw new ApiError(404, "User not found");
    }
  
    const isPasswordValid = await user.isPasswordCorrect(password);
  
    if (!isPasswordValid) {
      throw new ApiError(401, "Password incorrect");
    }
  
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");
  
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Ensure cookies are secure in production
      sameSite: 'Strict', // Prevent CSRF attacks
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    };
  
    res
      .status(200)
      .cookie("accessToken", accessToken, cookieOptions)
      .cookie("refreshToken", refreshToken, cookieOptions)
      .json(new ApiResponse(200, {
          user: loggedInUser,
          accessToken,
          refreshToken
        }, "User logged in successfully")
      );
  });

  const logoutUser = asyncHandler(async(req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1 // this removes the field from document
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"))
})


export { registerUser,loginUser,logoutUser };
