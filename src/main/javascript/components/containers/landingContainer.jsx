import {connect} from 'react-redux'
import {getTokenUrlRequest} from '../../actions/asyncActionCreators'
import {setTokenStateFromLocalstorage} from "../../actions/actionCreators";
import Landing from '../presentationals/pages/landing'
import {cleanStateOnLocalStorage, readStateOnLocalStorage} from "../../actions/windowActions";

const setStateFromLocalStorage = (dispatch) => {
  if (readStateOnLocalStorage() !== undefined) {
    let {tokenString, isFetchingToken} = readStateOnLocalStorage();
    dispatch(setTokenStateFromLocalstorage(Object.assign({}, {tokenString, isFetchingToken})));
    cleanStateOnLocalStorage();
  }
};

const mapStateToProps = state => Object.assign({}, state.token);

const mapDispatchToProps = (dispatch) => ({
  getInstaToken: (state) => getTokenUrlRequest(dispatch, state),
  setStateFromLocalStorage: () => setStateFromLocalStorage(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Landing);