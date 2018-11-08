import * as types from '../actions/types';
import update from 'immutability-helper';

const initialState = { 
  editedGroup: { name: '', rotatees: [], queue: 0, history: [], loading: false, error: null },
  activeGroup: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SELECT_GROUP:
      return update(
        state, 
        {
          group: {
            activeGroup: {$set: action.payload}
          }
        }
      )

      case types.UPDATE_GROUP_BEGIN:
      return update(
        state, 
        {
          newGroup: {
            loading: {$set: true}
          }
        }
      )
    case types.UPDATE_GROUP_SUCCESS:
      return update(
        state, 
        {
          newGroup: {
            loading: {$set: false},
          }
        }
      )
    case types.UPDATE_GROUP_FAILURE:
      return update(
        state, 
        {
          newGroup: {
            loading: {$set: false},
            error: {$set: action.payload}
          }
        }
      )

    

    default:
      return state;  
  }
}