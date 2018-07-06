import {connect} from 'react-redux'
import {getTokenUrlRequest} from '../../actions/asyncActionCreators'
import {
  setInputValue,
  setInputStateFromLocalstorage,
  setTokenStateFromLocalstorage
} from "../../actions/actionCreators";
import ReduxLanding from '../presentationals/reduxLanding'
import {cleanStateOnLocalStorage, readStateOnLocalStorage} from "../../actions/windowActions";

const setStateFromLocalStorage = (dispatch) => {
  if (readStateOnLocalStorage() !== undefined) {
    let {tokenString, isFetchingToken, tagName, pictureCount, visionTagCount} = readStateOnLocalStorage();
    dispatch(setInputStateFromLocalstorage(Object.assign({}, {tagName, pictureCount, visionTagCount})));
    dispatch(setTokenStateFromLocalstorage(Object.assign({}, {tokenString, isFetchingToken})));
    cleanStateOnLocalStorage();
  }
};

const mapStateToProps = state => Object.assign({}, state.token, state.input);

const mapDispatchToProps = (dispatch) => ({
  getInstaToken: (state) => getTokenUrlRequest(dispatch, state),
  setInputValue: (event, data) => dispatch(setInputValue(event, data)),
  setStateFromLocalStorage: () => setStateFromLocalStorage(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxLanding);