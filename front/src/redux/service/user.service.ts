import axios from "axios";
import { TUser } from "../slices/types";

const API_URL = "http://localhost:3000";

class UserService {
  async getAllUsers() {
    const response = await axios.get(`${API_URL}/users`);

    return response.data;
  }

  async deleteUser(id: number) {
    const response = await axios.delete(`${API_URL}/users/${id}`);

    return response.data;
  }

  async updateUser(user: TUser) {
    const response = await axios.put(`${API_URL}/users/${user.id}`, {data: user});

    return response;
  }


}
export default new UserService();
