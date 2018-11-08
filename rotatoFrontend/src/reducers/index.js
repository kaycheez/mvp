import { combineReducers } from "redux";
import allGroups from "./allGroups";
import group from "./group";

export default combineReducers({
  allGroups,
  group
});