import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import ActiveGroup from "../screens/ActiveGroup";

class ActiveGroupContainer extends Component {
  componentDidMount() {
    const { updateActiveGroup, groups, activeGroupIndex } = this.props;
    const { name, rotatees, queue, history } = groups[activeGroupIndex];
    console.log("name, rotatees, queue, history", name, rotatees, queue, history)
    updateActiveGroup(name, rotatees, queue, history);
  }
  
  render() {
    const { navigation, activeGroup } = this.props;
    console.log()
    return React.createElement(
      ActiveGroup,
      {
        activeGroup,
        navToEditGroup: () => {
          navigation.navigate("EditGroup");
        },
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