import * as types from '../actions/types';
import update from 'immutability-helper';

const initialState = { 
  groupsList: { groups: [], loading: false, error: null },
  newGroup: { name: '', rotatees: [], loading: false, error: null },
  activeGroup: { name: '', rotatees: [], queue: 0, history: [], loading: false, error: null },
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_GROUPS_BEGIN:
      return update(
        state, 
        {
          groupsList: {
            loading: {$set: true}
          }
        }
      )
    case types.FETCH_GROUPS_SUCCESS:
      return update(
        state, 
        {
          groupsList: {
            loading: {$set: false},
            groups: {$set: action.payload}
          }
        }
      )
    case types.FETCH_GROUPS_FAILURE:
      return update(
        state, 
        {
          groupsList: {
            loading: {$set: false},
            error: {$set: action.payload}
          }
        }
      )

      case types.ADD_GROUP_BEGIN:
      return update(
        state, 
        {
          newGroup: {
            loading: {$set: true}
          }
        }
      )
    case types.ADD_GROUP_SUCCESS:
      return update(
        state, 
        {
          newGroup: {
            loading: {$set: false},
          }
        }
      )
    case types.ADD_GROUP_FAILURE:
      return update(
        state, 
        {
          newGroup: {
            loading: {$set: false},
            error: {$set: action.payload}
          }
        }
      )

     case types.UPDATE_GROUP_NAME:
     return update(
       state,
       {
         newGroup: {
           name: {$set: action.payload}
         }
       }
     )
      
     case types.UPDATE_ROTATEES:
     return update(
       state,
       {
         newGroup: {
           rotatees: {$set: action.payload}
         }
       }
     )

    default:
      return state;  
  }
}