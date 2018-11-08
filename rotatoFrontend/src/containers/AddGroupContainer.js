import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import AddGroup from "../screens/AddGroup";

class AddGroupContainer extends Component {
  render() {
    const { saveNewGroupAndRefresh, navigation } = this.props;

    return React.createElement(
      AddGroup,
      {
        saveNewGroupAndGoBack: (newGroup) => {
          saveNewGroupAndRefresh(newGroup);
          navigation.navigate("Home");

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