import * as types from './types';

// SELECT GROUP

export const selectGroup = index => ({
  type: types.SELECT_GROUP,
  payload: index
})