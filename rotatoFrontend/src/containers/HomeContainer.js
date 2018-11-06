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
        groups: this.props.groups,
        fetchGroups: this.props.fetchGroups,
        loading: this.props.loading
      }
    )
  }
}


const mapStateToProps = state => ({
  groups: state.AllGroups.groups,
  loading: state.AllGroups.loading,
  error: state.AllGroups.error
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)