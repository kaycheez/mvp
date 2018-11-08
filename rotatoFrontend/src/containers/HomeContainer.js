import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import HomeScreen from "../screens/HomeScreen";

class HomeContainer extends Component {

  componentDidMount() {
    this.props.fetchGroups();
  }

  render() {
    return React.createElement(
      HomeScreen,
      {
        groupsList: this.props.groupsList,
        navToAddGroup: () => {
          this.props.navigation.navigate("AddGroup");
        }
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