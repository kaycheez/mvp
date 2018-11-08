import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import AddGroup from "../modals/AddGroup";

class AddGroupContainer extends Component {
  render() {
    return React.createElement(
      AddGroup,
      {
        modalVisible: this.props.modalVisible,
        toggleModalVisibility: this.props.toggleModalVisibility,
        saveNewGroupAndRefresh: this.props.saveNewGroupAndRefresh
      }
    )
  }
}

const mapStateToProps = ( state, ownProps ) => ({
  modalVisible: ownProps.modalVisible,
  toggleModalVisibility: ownProps.toggleModalVisibility
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGroupContainer)