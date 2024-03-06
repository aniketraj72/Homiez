import errorHandler from "./error.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log("req: " + req.cookies.access_token);
  // console.log("in verify token: " + token);

  if (!token) return next(errorHandler(401, "Unauthorized"));
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, "Forbidden"));
    req.user = user;
    // console.log("in verifyToken");
    // console.log(req.user);
    next();
  });
};
