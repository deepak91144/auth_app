export const storeUserDetails = (userDetails) => {
  localStorage.setItem("userData", JSON.stringify(userDetails));
};
export const getUsersDetails = () => {
  const usersData = JSON.parse(localStorage.getItem("userData"));

  return usersData;
};
export const storeLoggedInUser = (user) => {
  localStorage.setItem("loggedInUser", JSON.stringify(user));
};
export const getLoggedInUser = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return user;
};

export const isAuthenticated = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (user) {
    return true;
  }
  return false;
};
export const removeLoggedInUser = () => {
  localStorage.removeItem("loggedInUser");
};
