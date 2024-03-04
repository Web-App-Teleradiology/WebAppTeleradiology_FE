import axios from "axios";
import { Link } from "../../config";
import { getAuthToken } from "../../utils/auth";
export const getPatientHistory = async (id: string, keyword: string, page: number) => {
    try {
        const response = await axios.get(`${Link.Api}/patient/all/${id}?keyword=${keyword}&page=${page}`, {
            headers: { Authorization: `Bearer ${getAuthToken()}` },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
