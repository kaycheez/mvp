import * as types from '../actions/types';
import update from 'immutability-helper';

const initialState = { 
  groupsList: { groups: [], loading: false, error: null },
  newGroup: { name: '', rotatees: [], newRotateeName: '', loading: false, error: null },
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

    case types.SAVE_NEW_GROUP_BEGIN:
      return update(
        state, 
        {
          newGroup: {
            loading: {$set: true}
          }
        }
      )
    case types.SAVE_NEW_GROUP_SUCCESS:
      return update(
        state, 
        {
          newGroup: {
            loading: {$set: false},
          }
        }
      )
    case types.SAVE_NEW_GROUP_FAILURE:
      return update(
        state, 
        {
          newGroup: {
            loading: {$set: false},
            error: {$set: action.payload}
          }
        }
      )
    case types.SAVE_GROUP_FAILURE:
      return update(
        state, 
        {
          newGroup: {
            loading: {$set: false},
            error: {$set: action.payload}
          }
        }
      )

    case types.UPDATE_NEW_NAME:
      return update(
        state, 
        {
          newGroup: {
            name: {$set: action.payload}
          }
        }
      )

    case types.UPDATE_NEW_ROTATEES:
      return update(
        state, 
        {
          newGroup: {
            rotatees: {$push: [action.payload]}
          }
        }
      )
      
    case types.UPDATE_NEW_ROTATEE_NAME:
      return update(
        state, 
        {
          newGroup: {
            newRotateeName: {$set: action.payload}
          }
        }
      )

    case types.CLEAR_NEW_GROUP:
      return update(
        state, 
        {
          newGroup: {
            name: {$set: ''}, 
            rotatees: {$set: []}, 
            newRotateeName: {$set: ''},
            error: {$set: null} 
          }
        }
      )

    

    default:
      return state;  
  }
}