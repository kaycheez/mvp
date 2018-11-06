import * as types from '../actions/types';

const initialState = {
  groups: [],
  group: null,
  loading: false,
  error: null
}

export default function fetchGroupsReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_GROUPS_BEGIN:
      return { 
        ...state, 
        loading: true,
        error: null
      };

    case types.FETCH_GROUPS_SUCCESS:
      return {
        ...state,
        loading: false,
        groups: action.payload.groups
      }

    case types.FETCH_GROUPS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    
    default:
      return state;  
  }
}