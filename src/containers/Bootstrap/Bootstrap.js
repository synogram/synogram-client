import React from "react";
import {getRelatedWordsAPI} from "../../utilities/apiHandler";
import {connect} from "react-redux";
import * as actionTypes from "../../store/index";
import LoadingBlack from "../../components/Loading/LoadingBlack/LoadingBlack";

class Bootstrap extends React.Component {
  state = {
    isServerChecked: false,
  };

  componentDidMount() {
    // Check server status
    getRelatedWordsAPI("test")
      .then((res) => {
        this.props.setIsServerOnline(true);
        this.setState({isServerChecked: true});
      })
      .catch((err) => {
        this.props.setIsServerOnline(false);
        this.setState({isServerChecked: true});
      });
  }

  render() {
    return (
      <>
        {!this.state.isServerChecked && <LoadingBlack />}
        {this.state.isServerChecked && this.props.children}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setIsServerOnline: (value) =>
      dispatch(actionTypes.setIsServerOnline(value)),
  };
};

export default connect(null, mapDispatchToProps)(Bootstrap);
