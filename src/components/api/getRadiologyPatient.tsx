/* eslint-disable no-useless-catch */
import axios from "axios";
import { Link } from "../../config";
import { getAuthToken } from "../../utils/auth";
export const getRadiologyPatient = async () => {
  console.log(getAuthToken());
  try {
    const response = await axios.get(`${Link.Api}/radiology`, {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
