import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import HomeScreen from "../screens/HomeScreen";

class HomeContainer extends Component {
  render() {
    return React.createElement(
      HomeScreen,
      {
        groupsList: this.props.groupsList,
        fetchGroups: this.props.fetchGroups,
      }
    )
  }
}


const mapStateToProps = state => ({
  groupsList: state.groups.groupsList
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)