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
        fetchGroups: this.props.fetchGroups,
        updateGroupName: this.props.updateGroupName,
        updateRotatees: this.props.updateRotatees,
        modalVisible: this.props.modalVisible,
        toggleModalVisibility: this.props.toggleModalVisibility,
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