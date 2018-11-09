import * as types from './types';

// SELECT GROUP

export const selectGroup = index => ({
  type: types.SELECT_GROUP,
  payload: index
})


// UPDATE ACTIVE GROUP

export const updateActiveName = name => ({
  type: types.UPDATE_ACTIVE_NAME,
  payload: name
})

export const updateActiveRotatees = rotatee => ({
  type: types.UPDATE_ACTIVE_ROTATEES,
  payload: rotatee
})


export const updateActiveQueue = queue => ({
  type: types.UPDATE_ACTIVE_QUEUE,
  payload: queue
})

export const updateActiveHistory = history => ({
  type: types.UPDATE_ACTIVE_HISTORY,
  payload: history
})

export const updateActiveID = id => ({
  type: types.UPDATE_ACTIVE_ID,
  payload: id
})

export const updateActiveVersion = version => ({
  type: types.UPDATE_ACTIVE_VERSION,
  payload: version
})

export const updateActiveRotateeName = rotateeName => ({
  type: types.UPDATE_ACTIVE_ROTATEE_NAME,
  payload: rotateeName
});

export const addActiveRotatee = newRotatee => ({
  type: types.ADD_ACTIVE_ROTATEE,
  payload: newRotatee
})

export const addNewActiveRotatee = () => (
  (dispatch, getState ) => {
    dispatch(addActiveRotatee(getState().activeGroup.newRotateeName));
  }
)
  


export const updateActiveGroup = (name, rotatees, queue, history, id, version) => (
  (dispatch, getState) => {
    const currRotatees = getState().activeGroup.activeGroup.rotatees;
    if (currRotatees.length === 0) {
      dispatch(updateActiveName(name))
      dispatch(updateActiveRotatees(rotatees))
      dispatch(updateActiveQueue(queue))
      dispatch(updateActiveHistory(history))
      dispatch(updateActiveID(id))
      dispatch(updateActiveVersion(version))
    }
  }
)

export const clearActiveGroup = () => ({
  type: types.CLEAR_ACTIVE_GROUP,
});

export const clearActiveRotateeName = () => ({
  type: types.CLEAR_ACTIVE_ROTATEE_NAME,
});


// UPDATE GROUP REQUEST

export const updateActiveGroupBegin = () => ({
  type: types.UPDATE_ACTIVE_GROUP_BEGIN,
});

export const updateActiveGroupSuccess = () => ({
  type: types.UPDATE_ACTIVE_GROUP_SUCCESS,
});

export const updateActiveGroupFailure = error => ({
  type: types.UPDATE_ACTIVE_GROUP_FAILURE,
  payload: error
});


export const updateGroup = () => (
  (dispatch, getState ) => {
    // const id = getState().allGroups.groupsList[getState().activeGroup.activeGroupIndex];
    // const updatedGroup = {
    //   name: getState().activeGroup.activeGroup.name,
    //   rotatees: getState().activeGroup.activeGroup.rotatees,
    //   queue: getState().activeGroup.activeGroup.queue,
    //   history: getState().activeGroup.activeGroup.history,
    //   _id: getState().activeGroup.activeGroup._id,
    //   __v: getState().activeGroup.activeGroup.__v
    // }
    const updatedGroup = getState().activeGroup.activeGroup;

    dispatch(updateActiveGroupBegin());
    return fetch('http://localhost:1177/api/groups', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify(updatedGroup)
    })
    .then(handleErrors)
    .then(() => dispatch(updateActiveGroupSuccess()))
    .catch(error => dispatch(updateActiveGroupFailure(error)));
  }
)


// Helpers

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}