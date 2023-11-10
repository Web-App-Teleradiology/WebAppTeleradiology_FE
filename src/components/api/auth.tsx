/* eslint-disable no-useless-catch */
import axios from "axios";
import { Link } from "../../config";
export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${Link.Api}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
