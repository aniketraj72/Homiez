import Listing from "../models/listing.model.js";
import errorHandler from "../utils/error.js";

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) return next(errorHandler(404, "Listing not found!"));

  console.log("req.params.id : " + req.params.id);
  console.log("req.user.id: " + req.user.id);
  if (req.user.id !== listing.userRef) {
    console.log("in if bliock");
    return next(errorHandler(401, "You can delete your own listings!"));
  }

  try {
    await Listing.findByIdAndDelete(req.params.id);
    console.log("in try block");
    res.status(200).json("Listing has been deleted!");
  } catch (error) {
    next(error);
  }
};
