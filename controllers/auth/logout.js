// @Desc         Logout User
// @route        POST /auth/logout
// @access       Public

exports.logout = ({ session }, res) => {
  try {
    const user = session.user;
    if (user) {
      session.destroy((err) => {
        if (err) throw err;
        res.clearCookie(process.env.SESS_NAME);
        res.send(user);
      });
    } else {
      throw new Error("Something went wrong");
    }
  } catch (err) {
    console.log(err);
  }
};
