import axios from 'axios';

const baseURL = 'https://api.nasa.gov/';

export default axios.create({
  baseURL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});
