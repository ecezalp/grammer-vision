import {connect} from 'react-redux'
import {getTokenUrlRequest} from '../../actions/asyncActionCreators'
import {
  setInputValue,
  setInputStateFromLocalstorage,
  setTokenStateFromLocalstorage,
  toggleActiveInputField,
} from "../../actions/actionCreators";
import Landing from '../presentationals/landing'
import {cleanStateOnLocalStorage, readStateOnLocalStorage} from "../../actions/windowActions";

const setStateFromLocalStorage = (dispatch) => {
  if (readStateOnLocalStorage() !== undefined) {
    let {tokenString, isFetchingToken, input} = readStateOnLocalStorage();
    dispatch(setInputStateFromLocalstorage(Object.assign({}, input)));
    dispatch(setTokenStateFromLocalstorage(Object.assign({}, {tokenString, isFetchingToken})));
    cleanStateOnLocalStorage();
  }
};

const mapStateToProps = state => Object.assign({}, state.token, {input: state.input});

const mapDispatchToProps = (dispatch) => ({
  getInstaToken: (state) => getTokenUrlRequest(dispatch, state),
  setInputValue: (event, data) => dispatch(setInputValue(event, data)),
  setStateFromLocalStorage: () => setStateFromLocalStorage(dispatch),
  toggleActiveInputField: () => dispatch(toggleActiveInputField())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Landing);