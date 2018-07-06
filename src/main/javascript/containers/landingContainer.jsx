import {connect} from 'react-redux'
import {getTokenUrlRequest} from '../actions/asyncActionCreators'
import {setInputValue, setInputStateFromLocalstorage, setTokenStateFromLocalstorage} from "../actions/actionCreators";
import ReduxLanding from '../components/reduxLanding'
import {cleanStateOnLocalStorage, readStateOnLocalStorage} from "../actions/windowActions";

const setStateFromLocalStorage = (dispatch) => {
  console.log("local", readStateOnLocalStorage());
  if (readStateOnLocalStorage() !== undefined) {
    let {tokenString, isFetchingToken, tagName, pictureCount, visionTagCount} = readStateOnLocalStorage();
    dispatch(setInputStateFromLocalstorage(Object.assign({}, {tagName, pictureCount, visionTagCount})));
    dispatch(setTokenStateFromLocalstorage(Object.assign({}, {tokenString, isFetchingToken})));
    cleanStateOnLocalStorage();
  }
};

const mapStateToProps = state => {
  console.log("store", readStateOnLocalStorage());
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
  getInstaToken: (state) => getTokenUrlRequest(dispatch, state),
  setInputValue: (event, data) => dispatch(setInputValue(event, data)),
  setStateFromLocalStorage: () => setStateFromLocalStorage(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxLanding);