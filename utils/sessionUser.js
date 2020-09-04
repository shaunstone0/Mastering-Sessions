const sessionizeUser = (user) => {
  return {
    userId: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
  };
};

exports.sessionizeUser = sessionizeUser;
