import { GET_DATA, UPDATE_DATA } from './actions';

const initialState = {
  data: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload
      };
    case UPDATE_DATA:
      return {
        ...state,
        data: state.data.map(item =>
          item._id === action.payload._id ? action.payload : item
        )
      };
    };
  }