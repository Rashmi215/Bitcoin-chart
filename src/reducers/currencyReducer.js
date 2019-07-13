const initState = {
  price: '',
  code: 'USD'
}

const CurrencyReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOAD_DATA': 
      const newState = {
        price: action.payload.rate + ' ' + action.payload.code,
        code: action.payload.code
      }
      return newState;
    case 'LOAD_EUR': 
      const eurState = {
        price: action.payload.rate + ' ' + action.payload.code,
        code: action.payload.code
      }
      return eurState;
    case 'LOAD_GBP': 
      const gbpState = {
        price: action.payload.rate + ' ' + action.payload.code,
        code: action.payload.code
      }
      return gbpState;
    default: return state;
  }
};

export default CurrencyReducer;