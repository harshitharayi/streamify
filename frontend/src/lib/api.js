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

export async function getUserFriends(){
    const response = await axiosInstance.get("/users/friends");
    return response.data;
}





export async function getRecommendedUsers() {
  const response = await axiosInstance.get("/users");
  return response.data;
}


export async function getOutgoingFriendReqs(){
    const response = await axiosInstance.get("/users/outgoing-friend-requests");
    return response.data;
}

export async function sendFriendRequest(userId){
    const response = await axiosInstance.post(`/users/friend-request/${userId}`);
    return response.data;
}


export async function getFriendRequests() {
  const response = await axiosInstance.get("/users/friend-requests");
  return response.data;
}

export async function acceptFriendRequest(requestId){
  const response = await axiosInstance.put(`/users/friend-request/${requestId}/accept`);
  return response.data;
}

export async function getStreamToken() {
  const response = await axiosInstance.get("/chat/token");
  return response.data;
}