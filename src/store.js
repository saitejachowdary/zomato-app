import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  loading: false,
  list: [],
  cityId:6
};

const reducer = (state, action) => {
  console.log(state ,action ,'11::')
  switch(action.type) {
    case 'LOADING':
      return Object.assign({}, state, {
        loading: action.value
      })
      
    case 'LIST':
      return Object.assign({}, state, {
        loading: false,
        list: action.value
      })
      case 'CITY_ID':
      return Object.assign({}, state, {
        loading: false,
        cityId: action.value
      })
        
      
    default:
      return state;
  }
};

export default createStore(reducer, initialState, applyMiddleware(thunk));
