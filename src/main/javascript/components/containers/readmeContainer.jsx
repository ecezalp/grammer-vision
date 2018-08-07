import {connect} from 'react-redux'
import Readme from "../presentationals/elements/readme";
import {getTokenUrlRequest} from "../../actions/asyncActionCreators";
import * as actions from "../../actions/actionCreators";

const mapStateToProps = state => ({...state.privacy, ...state.token});

const mapDispatchToProps = dispatch => ({
  getInstaToken: (state) => getTokenUrlRequest(dispatch, state),
  handleDemoClick: () => {
    dispatch(actions.setDemoProfile(true));
    dispatch(actions.setCheckboxHidden(true));
    dispatch(actions.setLoginButton(true));
  }
});

const ownProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  ownProps,
)(Readme);