import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import EditGroup from "../screens/EditGroup";

class UpdateGroupContainer extends Component {
  render() {
    const { 
      name,
      rotatees,
      newRotateeName,
      navigation, 
      updateName, 
      updateAllRotatees, 
      saveNewGroupAndRefresh, 
      updateActiveRotateeName,
      clearActiveGroup,
      clearActiveRotateeName,
    } = this.props;

    return React.createElement(
      EditGroup,
      {
        name,
        rotatees,
        newRotateeName,
        updateName,
        updateRotateeName: updateActiveRotateeName,
        updateAllRotateesAndClear: (() => {
          updateAllRotatees();
          clearActiveRotateeName();
        }),
        updateGroupAndGoBack: (newGroup) => {
          saveNewGroupAndRefresh(newGroup)
            .then(() => navigation.goBack())
        },
        goBack: () => {
          navigation.goBack();
        }
      }
    )
  }
}

const mapStateToProps = state => ({
  name: state.activeGroup.activeGroup.name,
  rotatees: state.activeGroup.activeGroup.rotatees,
  newRotateeName: state.activeGroup.activeGroup.newRotateeName,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateGroupContainer)