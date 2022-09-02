import axios from "axios";
import { TUser } from "../slices/types";

const API_URL = "http://localhost:3000";

class UserService {
  async getAllUsers() {
    try {
      const response = await axios.get(`${API_URL}/users`);
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  async deleteUser(id: number) {
    try {
      const response = await axios.delete(`${API_URL}/users/${id}`);
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  async updateUser(user: TUser) {
    try {
      const response = await axios.put(`${API_URL}/users/${user.id}`, {
        data: user,
      });

      return response;
    } catch (e) {
      throw e;
    }
  }
}
export default new UserService();
