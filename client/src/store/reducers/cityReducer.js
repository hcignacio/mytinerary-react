import { GET_CITIES } from '../actions/cityActions'

const initialState = {
  cities: []
}

/* const initialState = [];  */


/* const cityReducer = (state = defaultState, action) => {
  console.log(state, action);

  switch (action.type) {
    case GET_CITIES: {
      console.log("action", action.payload.cities);

      return Object.assign({}, state, action.payload.cities);
    }
    default:
      return state;
  }
} */

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIES:
      return Object.assign({}, state, {cities : action.cities});
    default:
      return state;
  }
};

/* export default cityReducer; */