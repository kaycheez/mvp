import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import AddGroup from "../screens/AddGroup";

class AddGroupContainer extends Component {
  render() {
    const { 
      saveNewGroupAndRefresh, 
      navigation, 
      updateName, 
      updateRotatee, 
    } = this.props;

    return React.createElement(
      AddGroup,
      {
        updateName,
        updateRotatee,
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


const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(null, mapDispatchToProps)(AddGroupContainer)