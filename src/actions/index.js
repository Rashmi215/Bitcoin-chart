import axios from 'axios';

const ROOT_URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

// export const fetchData = () => {
//   const request = axios.get(ROOT_URL);
//   // // console.log('re', request)
//   // return {
//   //   type: 'FETCH_DATA',
//   //   payload: request
//   // };
// }

export const fetchData = () => {
  return (dispatch) => {
     axios.get(ROOT_URL).then(response => {
      dispatch(loadData(response.data.bpi.USD.rate, response.data.bpi.USD.code))
    })
  };
};

export const loadData = (rate, code) => {
  return {
    type: 'LOAD_DATA',
    payload: {rate,code}
  }
}