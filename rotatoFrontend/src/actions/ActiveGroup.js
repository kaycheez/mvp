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

export const updateActiveRotateeName = rotateeName => ({
  type: types.UPDATE_ACTIVE_ROTATEE_NAME,
  payload: rotateeName
});

export const updateActiveQueue = queue => ({
  type: types.UPDATE_ACTIVE_QUEUE,
  payload: queue
})

export const updateActiveHistory = history => ({
  type: types.UPDATE_ACTIVE_HISTORY,
  payload: history
})



export const updateActiveGroup = (name, rotatees, queue, history) => (
  (dispatch, getState) => {
    const currRotatees = getState().activeGroup.activeGroup.rotatees;
    if (currRotatees.length === 0) {
      dispatch(updateActiveName(name))
      dispatch(updateActiveRotatees(rotatees))
      dispatch(updateActiveQueue(queue))
      dispatch(updateActiveHistory(history))
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