import { jwtDecode } from "jwt-decode";

export const isTokenValid = (token) => {
  if (!isTokenValid) return false;
  const decoded = jwtDecode(token);
  const correntTime = Date.now() / 1000;
  return decoded.exp > correntTime;
};
