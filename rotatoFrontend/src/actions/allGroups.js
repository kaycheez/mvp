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

export const addGroupBegin = () => ({
  type: types.ADD_GROUP_BEGIN,
});

export const addGroupSuccess = () => ({
  type: types.ADD_GROUP_SUCCESS,
});

export const addGroupFailure = error => ({
  type: types.ADD_GROUP_FAILURE,
  payload: error
});

export function addGroup(newGroup) {
  return dispatch => {
    dispatch(addGroupBegin());
    return fetch('http://localhost:1177/api/groups', {
      method: "POST",
      body: JSON.stringify(newGroup)
    })
    .then(handleErrors)
    .then(() => dispatch(addGroupSuccess()))
    .catch(error => dispatch(addGroupFailure(error)));
  }
}
  
// UPDATE GROUP NAME
export const updateGroupName = name => ({
  type: types.UPDATE_GROUP_NAME,
  payload: name
})

// UPDATE ROTATEES
export const updateRotatees = rotatees => ({
  type: types.UPDATE_ROTATEES,
  payload: rotatees
})


// Helpers

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}