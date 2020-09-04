const asyncHandler = require("../../middleware/async");
const { sessionizeUser } = require("../../utils/sessionUser");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");

// @Desc         Login User
// @route        POST /auth/register
// @access       Public

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate Email and Password
  if (!email || !password) {
    return next(
      new ErrorResponse("Please provide and email and password", 400)
    );
  }

  // Check for User
  const user = await User.findOne({ email }).select("password");
  const isMatch = await user.matchPassword(password);
  if (user && isMatch) {
    const sessionUser = sessionizeUser(user);
    req.session.user = sessionUser;
    res.send(sessionUser);
  }
});
