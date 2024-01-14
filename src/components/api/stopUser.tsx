import axios from "axios";
import { getAuthToken } from "../../utils/auth";
import { Link } from "../../config";

export const stopUser = async (id: string) => {
  try {
    const response = await axios.patch(
      `${Link.Api}/users/stop/${id}`,
      {},
      {
        headers: { Authorization: `Bearer ${getAuthToken()}` },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
