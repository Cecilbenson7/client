import axios from "axios";

// Create an Axios instance with the base URL for the API
const API = axios.create({
  baseURL: "http://localhost:8080/api",

});

// User Sign-Up
export const UserSignUp = async (data) => {
  try {
    const response = await API.post("/user/signup", data);
    return response.data;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

// User Sign-In
export const UserSignIn = async (data) => {
  try {
    const response = await API.post("/user/signin", data);
    return response.data;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};

// Get Dashboard Details
export const getDashboardDetails = async (token) => {
  try {
    const response = await API.get("/user/dashboard", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching dashboard details:", error);
    throw error;
  }
};

// Get Workouts for a Specific Date
export const getWorkouts = async (token, date) => {
  try {
    const response = await API.get(`/user/workout${date ? `?date=${date}` : ''}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching workouts:", error);
    throw error;
  }
};

// Add a New Workout
export const addWorkout = async (token, data) => {
  try {
    const response = await API.post("/user/workout", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding workout:", error);
    throw error;
  }
};
