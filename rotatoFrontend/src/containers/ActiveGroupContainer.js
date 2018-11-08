import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import ActiveGroup from "../screens/ActiveGroup";

class ActiveGroupContainer extends Component {
  
  render() {
    const { activeGroupIndex, groups, navigation } = this.props;
    
    return React.createElement(
      ActiveGroup,
      {
        activeGroup: groups[activeGroupIndex],
        navToEditGroup: () => {
          navigation.navigate("EditGroup");
        },
      }
    )
  }
}

const mapStateToProps = state => ({
  groups: state.allGroups.groupsList.groups,
  activeGroupIndex: state.group.activeGroupIndex,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveGroupContainer)