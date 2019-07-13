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
    default: return state;
  }
};
export default CurrencyReducer;