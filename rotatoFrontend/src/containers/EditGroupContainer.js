import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import AddGroup from "../screens/AddGroup";

class EditGroupContainer extends Component {
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
          saveNewGroupAndRefresh(newGroup);
          navigation.goBack();

        },
        goBack: () => {
          navigation.goBack();
        }
      }
    )
  }
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(null, mapDispatchToProps)(EditGroupContainer)