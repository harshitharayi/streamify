import { axiosInstance } from "./axios";

// Signup function
export const signup = async (signupData) => {
  const response = await axiosInstance.post("/auth/signup", signupData);
  return response.data;
};

// Login function
export const login = async (loginData) => {
  const response = await axiosInstance.post("/auth/login", loginData);
  return response.data;
};

// Logout function
export const logout = async () => {
  const response = await axiosInstance.post("/auth/logout");
  return response.data;
};

// Get authenticated user
export const getAuthUser = async () => {
  try {
    const res = await axiosInstance.get("/auth/me");
    return res.data;
  } catch (error) {
    console.error("Error in getAuthUser:", error);
    return null;
  }
};

// Complete onboarding
export const completeOnboarding = async (userData) => {
  const response = await axiosInstance.post("/auth/onboarding", userData);
  return response.data;
};