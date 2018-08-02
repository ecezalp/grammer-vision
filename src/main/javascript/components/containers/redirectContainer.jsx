import {connect} from 'react-redux';
import {setTokenStateFromLocalstorage} from "../../actions/actionCreators";
import {getPictureDataFromInstagram} from "../../actions/asyncActionCreators";
import Redirect from '../functionals/redirect'
import {readStateOnLocalStorage, isStorageDirty} from "../../actions/windowActions";

const setStateFromLocalStorage = (dispatch, token) => {
  if (isStorageDirty()) {
    let {isFetchingToken} = readStateOnLocalStorage();
    dispatch(setTokenStateFromLocalstorage(Object.assign({}, {isFetchingToken, token})));
  }
};

const isGoingHome = !isStorageDirty();

const mapDispatchToProps = (dispatch) => ({
  getPictureDataFromInstagram: (token, handleSuccess) => getPictureDataFromInstagram(dispatch, token, handleSuccess),
  setStateFromLocalStorage: (token) => setStateFromLocalStorage(dispatch, token),
  isGoingHome,
});

export default connect(
  null,
  mapDispatchToProps,
)(Redirect);