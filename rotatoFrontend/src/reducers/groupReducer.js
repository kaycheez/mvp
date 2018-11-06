import {
  FETCH_GROUPS_BEGIN,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_FAILURE
} from '../actions/actionCreators';

const initialState = {
  groups: [],
  group: null,
  loading: false,
  error: null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GROUPS_BEGIN:
      return { 
        ...state, 
        loading: true,
        error: null
      };

    case FETCH_GROUPS_SUCCESS:
      return {
        ...state,
        loading: false,
        groups: action.payload.groups
      }

    case FETCH_GROUPS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    
    default:
      return state;  
  }
}