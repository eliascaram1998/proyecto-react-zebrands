import axios from 'axios';
// Api instance 

export default axios.create({
  baseURL: `https://api.github.com/`
});