const axios = require('axios');

const getMessages = async () => {
  const { data } = await axios.get('http://localhost:9090/api/messages');
  return data.messages;
};

export { getMessages };
