export const checkLoggedIn = async () => {
  const response = await fetch("/api/auth/session");
  const { user } = await response.json();
  let preloadedState = {};
  if (user) {
    preloadedState = {
      session: user,
    };
  }
  return preloadedState;
};
