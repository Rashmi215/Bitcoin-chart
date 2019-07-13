import {combineReducers} from 'redux';
import CurrencyReducer from './currencyReducer';

const rootReducer = combineReducers({
  currencyState: CurrencyReducer
});

export default rootReducer;