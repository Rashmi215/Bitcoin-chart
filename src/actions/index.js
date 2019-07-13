import axios from 'axios';

const ROOT_URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

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

export const fetchEur = () => {
  return (dispatch) => {
     axios.get(ROOT_URL).then(response => {
      dispatch(loadEur(response.data.bpi.EUR.rate, response.data.bpi.EUR.code))
    })
  };
};

export const loadEur = (rate, code) => {
  return {
    type: 'LOAD_EUR',
    payload: {rate,code}
  }
}

export const fetchGbp = () => {
  return (dispatch) => {
     axios.get(ROOT_URL).then(response => {
      dispatch(loadGbp(response.data.bpi.GBP.rate, response.data.bpi.GBP.code))
    })
  };
};

export const loadGbp = (rate, code) => {
  return {
    type: 'LOAD_GBP',
    payload: {rate,code}
  }
}

