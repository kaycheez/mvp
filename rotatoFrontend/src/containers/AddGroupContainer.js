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
      navigation, 
      updateName, 
      updateAllRotatees, 
      updateNewRotateeName,
      saveNewGroupAndRefresh, 
    } = this.props;

    return React.createElement(
      AddGroup,
      {
        name,
        rotatees,
        updateName,
        updateAllRotatees,
        updateNewRotateeName,
        saveNewGroupAndGoBack: (newGroup) => {
          saveNewGroupAndRefresh(newGroup)
            .then(() => navigation.navigate("Home"));
        },
        goBack: () => {
          navigation.navigate("Home");
        }
      }
    )
  }
}

const mapStateToProps = state => ({
  name: state.allGroups.newGroup.name,
  rotatees: state.allGroups.newGroup.rotatees,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGroupContainer)