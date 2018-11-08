import * as types from '../actions/types';
import update from 'immutability-helper';

const initialState = { 
  activeGroup: { name: '', rotatees: [], queue: 0, history: [], newRotateeName: '', loading: false, error: null },
  activeGroupIndex: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SELECT_GROUP:
      return update(
        state,
          {
            activeGroupIndex: {$set: action.payload}
          }
      )
      
    case types.UPDATE_ACTIVE_NAME:
      return update(
        state,
          {
            activeGroup: {
              name: {$set: action.payload}
            }
          }
      )

    case types.UPDATE_ACTIVE_ROTATEES:
      return update(
        state,
          {
            activeGroup: {
              rotatees: {$push: action.payload}
            }
          }
      )

    case types.UPDATE_ACTIVE_ROTATEE_NAME:
      return update(
        state,
          {
            activeGroup: {
              newRotateeName: {$set: action.payload}
            }
          }
      )

    case types.UPDATE_ACTIVE_QUEUE:
      return update(
        state,
          {
            activeGroup: {
              queue: {$set: action.payload}
            }
          }
      )

    case types.UPDATE_ACTIVE_HISTORY:
      return update(
        state,
          {
            activeGroup: {
              history: {$push: action.payload}
            }
          }
      )
      

      case types.UPDATE_ACTIVE_GROUP_BEGIN:
      return update(
        state, 
        {
          activeGroup: {
            loading: {$set: true}
          }
        }
      )
    case types.UPDATE_ACTIVE_GROUP_SUCCESS:
      return update(
        state, 
        {
          activeGroup: {
            loading: {$set: false},
          }
        }
      )
    case types.UPDATE_ACTIVE_GROUP_FAILURE:
      return update(
        state, 
        {
          activeGroup: {
            loading: {$set: false},
            error: {$set: action.payload}
          }
        }
      )

    

    default:
      return state;  
  }
}