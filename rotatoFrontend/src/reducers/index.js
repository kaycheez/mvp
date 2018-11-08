import { combineReducers } from "redux";
import allGroups from "./allGroups";
import activeGroup from "./activeGroup";

export default combineReducers({
  allGroups,
  activeGroup
});