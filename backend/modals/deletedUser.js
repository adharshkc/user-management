const mongoose = require("mongoose");
const deletedUserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  isAdmin: {
    type: String,
    default: "user",
  },
  password: {
    type: String,
    required: true,
  },
});


const DeletedUser = mongoose.model("DeletedUsers", deletedUserSchema);
module.exports = DeletedUser;