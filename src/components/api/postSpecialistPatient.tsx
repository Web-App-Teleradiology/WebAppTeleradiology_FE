import axios from "axios";
import { Link } from "../../config";
import { getAuthToken } from "../../utils/auth";
import { specialistDto } from "../../types/interface";

export const postSpecialistPatient = async (
  id: string,
  formData: specialistDto
) => {
  try {
    const response = await axios.patch(
      `${Link.Api}/radiology/specialist/${id}`,
      formData,
      {
        headers: { Authorization: `Bearer ${getAuthToken()}` },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
