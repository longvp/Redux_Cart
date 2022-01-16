import { combineReducers } from 'redux';
import cart from './cart';
import message from './message';
import products from './products';

const appReducer = combineReducers({
    products,
    cart,
    message
})

export default appReducer;