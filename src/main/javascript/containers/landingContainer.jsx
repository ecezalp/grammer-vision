import {connect} from 'react-redux'
import {getTokenUrlRequest} from '../actions/asyncActionCreators'
import {setInputValue} from "../actions/actionCreators";
import ReduxLanding from '../components/reduxLanding'

const mapStateToProps = state => {
  let {tokenString, isFetchingToken} = state.token;
  let {tagName, pictureCount, visionTagCount} = state.input;

  return {
    tokenString,
    isFetchingToken,
    tagName,
    pictureCount,
    visionTagCount,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getInstaToken: () => getTokenUrlRequest(dispatch),
  setInputValue: (event, data) => dispatch(setInputValue(event, data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxLanding);