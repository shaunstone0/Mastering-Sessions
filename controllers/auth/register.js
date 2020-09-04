const { sessionizeUser } = require("../../utils/sessionUser");
const asyncHandler = require("../../middleware/async");
const User = require("../../models/User");

// @Desc         Register User
// @route        POST /auth/register
// @access       Public

exports.register = asyncHandler(async (req, res, next) => {
  const { firstname, lastname, email, role, password } = req.body;

  //  Create User
  const user = new User({ firstname, lastname, email, role, password });
  const sessionUser = sessionizeUser(user);
  await user.save();

  req.session.user = sessionUser;
  res.send(sessionUser);
});
