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
    const { groupsList, navigation, selectGroup } = this.props;

    return React.createElement(
      HomeScreen,
      {
        groupsList,
        navToAddGroup: () => {
          navigation.navigate("AddGroup");
        },
        navToGroup: (index) => {
          selectGroup(index);
          navigation.navigate("ActiveGroup");
        },
      }
    )
  }
}


const mapStateToProps = state => ({
  groupsList: state.allGroups.groupsList
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)