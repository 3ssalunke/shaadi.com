export const setToken = (token) => localStorage.setItem("shaadi_token", token);
export const getToken = () => localStorage.getItem("shaadi_token");
export const clearToken = () => localStorage.removeItem("shaadi_token");

export const isAuthenticated = () => {
  const token = getToken();

  if (!token) return false;
  if (token !== "qwerty123") return false;
  return true;
};
