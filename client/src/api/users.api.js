import axios from "axios";

export const createUsersRequest = async (users) =>
  await axios.post("http://localhost:4000/users", users);
