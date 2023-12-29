import User from "../models/user.model.js";
import errorHandler from "../utils/error.js";
import bcryptjs from "bcryptjs";

export const test = (req, res) => {
  res.json({
    message: "Api routes work!!!",
  });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only update your own account"));
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
      console.log("in body password");
    }
    console.log("in try body");
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );
    console.log(" after updatedUser");
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
    console.log("in update user");
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
