const axios = require('axios');
const baseURL = 'http://localhost:9090/api';

const getMessages = async () => {
  const { data } = await axios.get('http://localhost:9090/api/messages');
  return data.messages;
};

const getUsers = async () => {
  const { data } = await axios.get(`${baseURL}/users`);
  return data.users;
};

export { getMessages, getUsers };
