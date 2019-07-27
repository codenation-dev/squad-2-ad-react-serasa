import axios from 'axios';

const Service = {
  async user(user) {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    return response.data;
  }
}

export default Service;