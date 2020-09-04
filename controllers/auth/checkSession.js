// @Desc         Check Session
// @route        GET /auth/session
// @access       Private

exports.checkSession = ({ session: { user }, res }) => {
  res.send({ user });
};
