
// export function listGroups(groups) {
//   return {
//     type: LOAD_GROUPS,
//     payload: groups
//   }
// }

export const FETCH_GROUPS_BEGIN = 'FETCH_GROUPS_BEGIN';
export const FETCH_GROUPS_SUCCESS = 'FETCH_GROUPS_SUCCESS';
export const FETCH_GROUPS_FAILURE = 'FETCH_GROUPS_FAILURE';

export const fetchGroupsBegin = () => ({
  type: FETCH_GROUPS_BEGIN
});

export const fetchGroupsSuccess = groups => ({
  type: FETCH_GROUPS_SUCCESS,
  payload: { groups }
});

export const fetchGroupsFailure = error => ({
  type: FETCH_GROUPS_FAILURE,
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

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}