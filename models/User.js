const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please enter your first name"],
  },

  lastname: {
    type: String,
    required: [true, "Please enter your last name"],
  },
  email: {
    type: String,
    required: [true, "Please provide a valid email"],
    unique: true,
    match: [
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      "Please provide a valid email",
    ],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },

  password: {
    type: String,
    required: [true, "Please provide a valid password"],
    minlength: 6,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Encrypt Password
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
});

// Match password to hashed password
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// // Generate and hash passwordtoken
// UserSchema.methods.getResetPasswordToken = function () {
//   const resetToken = crypto.randomBytes(20).toString("hex");
//
//   // Hash token and set to resetPasswordToken
//   this.resetPasswordToken = crypto
//     .createHash("sha256")
//     .update(resetToken)
//     .digest("hex");
//
//   // Set Expire
//   this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
//
//   return resetToken;
// };

module.exports = mongoose.model("User", UserSchema);
