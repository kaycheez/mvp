import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import ActiveGroup from "../screens/ActiveGroup";

class ActiveGroupContainer extends Component {
  componentDidMount() {
    const { updateActiveGroup, groups, activeGroupIndex } = this.props;
    const { name, rotatees, queue, history, _id, __v } = groups[activeGroupIndex];

    updateActiveGroup(name, rotatees, queue, history, _id, __v)
  }
  
  render() {
    const { navigation, activeGroup, clearActiveGroup, fetchGroups } = this.props;

    return React.createElement(
      ActiveGroup,
      {
        activeGroup,
        navToEditGroup: () => {
          navigation.navigate("UpdateGroup");
        },
        clearAndGoBack: () => {
          fetchGroups()
            .then(() => {
              clearActiveGroup();
              navigation.goBack();
            })
        }
      }
    )
  }
}

const mapStateToProps = state => ({
  groups: state.allGroups.groupsList.groups,
  activeGroupIndex: state.activeGroup.activeGroupIndex,
  activeGroup: state.activeGroup.activeGroup,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveGroupContainer)