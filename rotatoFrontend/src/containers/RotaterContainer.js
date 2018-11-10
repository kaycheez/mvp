import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import Rotater from "../components/Rotater";

class RotaterContainer extends Component {

  changeQueueToNext() {
    const { queue, rotatees, updateActiveQueue } = this.props;
    let newQueue = queue + 1;

    if (newQueue === rotatees.length) {
      newQueue = 0
    }
    updateActiveQueue(newQueue)
  }

  render() {
    const { queue, rotatees, updateGroup } = this.props;

    return React.createElement(
      Rotater,
      {
        queue,
        rotatees,
        commenceRotation: (newQueue) => {
          this.changeQueueToNext(newQueue);
          updateGroup();
        }
      }
    )
  }
}


const mapStateToProps = state => ({
  queue: state.activeGroup.activeGroup.queue,
  rotatees: state.activeGroup.activeGroup.rotatees
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RotaterContainer)