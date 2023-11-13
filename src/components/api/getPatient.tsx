import axios from "axios";
import { Link } from "../../config";
import { getAuthToken } from "../../utils/auth";
export const getPatient = async (id: string) => {
  try {
    const response = await axios.get(`${Link.Api}/radiology/${id}`, {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
