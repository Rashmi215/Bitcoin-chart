import axios from 'axios';

const ROOT_URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

export const fetchData = () => {
  const request = axios.get(ROOT_URL);
  return {
    type: 'FETCH_DATA',
    payload: request
  };
}