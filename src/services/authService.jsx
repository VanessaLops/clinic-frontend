import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = "http://localhost:3000/api";

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });

    console.log(response.data);

    if (response.data.token) {
      localStorage.setItem("useToken", response.data.token);
    }

    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error?.response?.data?.message);
    throw error;
  }
};

export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/forgot-password`, {
      email,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Erro ao enviar e-mail de recuperação:",
      error?.response?.data?.message
    );
    throw error;
  }
};

export const resetPassword = async (token, newPassword) => {
  try {
    const response = await axios.post(`${API_URL}/reset-password`, {
      token,
      newPassword,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao redefinir a senha:", error?.response?.data?.message);
    throw error;
  }
};

export const getToken = () => {
  return localStorage.getItem("useToken");
};

export const logout = () => {
  localStorage.removeItem("useToken");
};
