import * as types from '../actions/types';
import update from 'immutability-helper';

const initialState = { 
  activeGroup: { 
    name: '', 
    rotatees: [], 
    queue: null, 
    history: [], 
    _id: '', 
    __v: null },
  activeGroupIndex: null,
  newRotateeName: '', 
  loading: false, 
  error: null
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
    case types.UPDATE_ACTIVE_ID:
      return update(
        state,
          {
            activeGroup: {
              _id: {$set: action.payload}
            }
          }
      )
    case types.UPDATE_ACTIVE_VERSION:
      return update(
        state,
          {
            activeGroup: {
              __v: {$set: action.payload}
            }
          }
      )

    case types.UPDATE_ACTIVE_ROTATEE_NAME:
      return update(
        state,
        {
          newRotateeName: {$set: action.payload}
        }
      )
      
    case types.ADD_ACTIVE_ROTATEE:
      return update(
        state,
        {
          activeGroup: {
            rotatees: {$push: [action.payload]}
          }
        }
      )
      

    case types.UPDATE_ACTIVE_GROUP_BEGIN:
      return update(
        state, 
        {
          loading: {$set: true}
        }
      )

    case types.UPDATE_ACTIVE_GROUP_SUCCESS:
      return update(
        state, 
        {
          loading: {$set: false},
        }
      )

    case types.UPDATE_ACTIVE_GROUP_FAILURE:
      return update(
        state, 
        {
          loading: {$set: false},
          error: {$set: action.payload}
        }
      )
    
      case types.CLEAR_ACTIVE_GROUP:
      return update(
        state, 
        {
          activeGroup: {
            name: {$set: ''}, 
            rotatees: {$set: []}, 
            newRotateeName: {$set: ''},
            queue: {$set: null},
            history: {$set: []},
            _id: {$set: ''},
            __v: {$set: null},
          },
          error: {$set: null}
        }
      )

    case types.CLEAR_ACTIVE_ROTATEE_NAME:
      return update(
        state, 
        {
          newRotateeName: {$set: ''},
        }
      )

    

    default:
      return state;  
  }
}