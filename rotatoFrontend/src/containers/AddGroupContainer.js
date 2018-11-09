import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import AddGroup from "../screens/AddGroup";

class AddGroupContainer extends Component {
  render() {
    const { 
      name,
      rotatees,
      newRotateeName,
      navigation, 
      updateNewName, 
      updateAllRotatees, 
      updateNewRotateeName,
      saveNewGroupAndRefresh,
      clearNewGroup,
      clearNewRotateeName,
    } = this.props;

    return React.createElement(
      AddGroup,
      {
        name,
        rotatees,
        newRotateeName,
        updateNewName,
        updateNewRotateeName,
        updateAllRotateesAndClear: (() => {
          updateAllRotatees();
          clearNewRotateeName();
        }),
        saveNewGroupAndGoBack: (newGroup) => {
          saveNewGroupAndRefresh(newGroup)
            .then(() => clearNewGroup())
            .then(() => navigation.navigate("Home"));
        },
        goBack: () => {
          clearNewGroup();
          navigation.navigate("Home");
        }
      }
    )
  }
}

const mapStateToProps = state => ({
  name: state.allGroups.newGroup.name,
  rotatees: state.allGroups.newGroup.rotatees,
  newRotateeName: state.allGroups.newGroup.newRotateeName,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGroupContainer)