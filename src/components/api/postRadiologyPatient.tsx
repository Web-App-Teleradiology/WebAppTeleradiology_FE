import axios from "axios";
import { Link } from "../../config";
import { getAuthToken } from "../../utils/auth";
import { addRadiologyDto } from "../../types/interface";

export const postRadiologyPatient = async (formData: addRadiologyDto) => {
  try {
    const response = await axios.post(`${Link.Api}/radiology`, formData, {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
