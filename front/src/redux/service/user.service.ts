import axios from "axios";

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


}
export default new UserService();
