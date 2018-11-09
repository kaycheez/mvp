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
      navigation, 
      updateGroup,
      newRotateeName,
      updateActiveName, 
      addNewActiveRotatee,
      clearActiveRotateeName,
      updateActiveRotateeName,
    } = this.props;

    return React.createElement(
      EditGroup,
      {
        name,
        rotatees,
        newRotateeName,
        updateName: updateActiveName,
        updateRotateeName: updateActiveRotateeName,
        addRotateeAndClear: (() => {
          addNewActiveRotatee();
          clearActiveRotateeName();
        }),
        updateGroupAndGoBack: () => {
          updateGroup()
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
  newRotateeName: state.activeGroup.newRotateeName,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateGroupContainer)