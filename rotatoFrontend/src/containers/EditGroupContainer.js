import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import AddGroup from "../screens/AddGroup";

class EditGroupContainer extends Component {
  render() {

    return React.createElement(
      AddGroup,
      {
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