import {connect} from 'react-redux'
import {setTokenStateFromLocalstorage} from "../../actions/actionCreators";
import Landing from '../presentationals/pages/landing'
import {cleanStateOnLocalStorage, readStateOnLocalStorage} from "../../actions/windowActions";
import * as actions from '../../actions/actionCreators';

const setStateFromLocalStorage = (dispatch) => {
  if (readStateOnLocalStorage() !== undefined) {
    let {tokenString, isFetchingToken} = readStateOnLocalStorage();
    dispatch(setTokenStateFromLocalstorage(Object.assign({}, {tokenString, isFetchingToken})));
    cleanStateOnLocalStorage();
  }
};

const mapStateToProps = state => ({...state.token, ...state.privacy});

const mapDispatchToProps = (dispatch) => ({
  setStateFromLocalStorage: () => setStateFromLocalStorage(dispatch),
  togglePrivacySwitch: () => dispatch(actions.togglePrivacySwitch()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Landing);