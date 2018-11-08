import * as types from './types';

// FETCH GROUPS

export const fetchGroupsBegin = () => ({
  type: types.FETCH_GROUPS_BEGIN,
});

export const fetchGroupsSuccess = groups => ({
  type: types.FETCH_GROUPS_SUCCESS,
  payload: groups
});

export const fetchGroupsFailure = error => ({
  type: types.FETCH_GROUPS_FAILURE,
  payload: error
});


export function fetchGroups() {
  return dispatch => {
    dispatch(fetchGroupsBegin());
    return fetch('http://localhost:1177/api/groups')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchGroupsSuccess(json.groups));
        return json.products;
      })
      .catch(error => dispatch(fetchGroupsFailure(error)));
  }
}

// SAVE GROUP

export const saveGroupBegin = () => ({
  type: types.SAVE_GROUP_BEGIN,
});

export const saveGroupSuccess = () => ({
  type: types.SAVE_GROUP_SUCCESS,
});

export const saveGroupFailure = error => ({
  type: types.SAVE_GROUP_FAILURE,
  payload: error
});

export const saveNewGroup = () => (
  (dispatch, getState ) => {
    const newGroup = {
      name: getState().allGroups.newGroup.name,
      rotatees: getState().allGroups.newGroup.rotatees
    }
    dispatch(saveGroupBegin());
    return fetch('http://localhost:1177/api/groups', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(newGroup)
    })
    .then(handleErrors)
    .then(() => dispatch(saveGroupSuccess()))
    .catch(error => dispatch(saveGroupFailure(error)));
  }
)

export function saveNewGroupAndRefresh() {
  return dispatch => {
    return dispatch(saveNewGroup()).then(() => {
      return dispatch(fetchGroups())
    })
  }
}
  
export const updateName = name => ({
  type: types.UPDATE_NAME,
  payload: name
});

export const updateRotatees = rotatees => ({
  type: types.UPDATE_ROTATEE,
  payload: rotatees
});


// Helpers

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}