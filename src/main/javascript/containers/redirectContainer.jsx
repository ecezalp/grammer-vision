import {connect} from 'react-redux';
import ReduxRedirect from '../components/reduxRedirect';
import {setInputStateFromLocalstorage, setTokenStateFromLocalstorage} from "../actions/actionCreators";
import {cleanStateOnLocalStorage, readStateOnLocalStorage} from "../actions/windowActions";

const mapDispatchToProps = (dispatch, ownProps) => ({
  setInputStateFromLocalstorage: (state) => dispatch(setInputStateFromLocalstorage(state)),
  setTokenStateFromLocalstorage: (state) => dispatch(setTokenStateFromLocalstorage(state)),
  readStateOnLocalStorage,
  cleanStateOnLocalStorage,
  children: ownProps.children,
});

export default connect(
  null,
  mapDispatchToProps
)(ReduxRedirect);