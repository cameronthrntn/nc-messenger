const axios = require('axios');
const baseURL = 'http://localhost:9090/api';

const getMessages = async () => {
  const { data } = await axios.get(`${baseURL}/messages`);
  return data.messages;
};

const getUsers = async () => {
  const { data } = await axios.get(`${baseURL}/users`);
  return data.users;
};

const updateUser = async (user_id, body) => {
  await axios.patch(`${baseURL}/users/${user_id}`, { user_id, ...body });
};

const postUser = async body => {
  const { data } = await axios.post(`${baseURL}/users`, body);
  return data.user;
};

export { getMessages, getUsers, postUser, updateUser };
