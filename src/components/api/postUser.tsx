import axios from "axios";
import { Link } from "../../config";
import { getAuthToken } from "../../utils/auth";
import { userDto } from "../../types/interface";

export const postUser = async (formData: userDto) => {
  try {
    const response = await axios.post(`${Link.Api}/users`, formData, {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
