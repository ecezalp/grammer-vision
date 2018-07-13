import {connect} from 'react-redux';
import {setInputStateFromLocalstorage, setTokenStateFromLocalstorage} from "../../actions/actionCreators";
import {getPictureUrls} from "../../actions/asyncActionCreators";
import Redirect from '../functionals/redirect'
import {readStateOnLocalStorage, isStorageDirty} from "../../actions/windowActions";

const setStateFromLocalStorage = (dispatch, token) => {
  if (isStorageDirty) {
    let {isFetchingToken, input} = readStateOnLocalStorage();
    dispatch(setInputStateFromLocalstorage(Object.assign({}, input)));
    dispatch(setTokenStateFromLocalstorage(Object.assign({}, {isFetchingToken, token})));
  }
};

const mapDispatchToProps = (dispatch) => ({
  getPictureUrls: (token, handleSuccess) => getPictureUrls(dispatch, token, handleSuccess),
  setStateFromLocalStorage: (token) => setStateFromLocalStorage(dispatch, token),
});

export default connect(
  null,
  mapDispatchToProps,
)(Redirect);