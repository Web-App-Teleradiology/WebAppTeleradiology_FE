import axios from "axios";
import { Link } from "../../config";
import { getAuthToken } from "../../utils/auth";
export const getRadiologyPatient = async (keyword: string, page: number) => {
  try {
    const response = await axios.get(
      `${Link.Api}/radiology?keyword=${keyword}&page=${page}`,
      {
        headers: { Authorization: `Bearer ${getAuthToken()}` },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
