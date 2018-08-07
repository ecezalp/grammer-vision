import {connect} from 'react-redux'
import Registration from "../presentationals/pages/registration";
import {} from "../../actions/actionCreators";
import {} from '../../actions/asyncActionCreators';

const mapStateToProps = state => {
  return {...state.search, tokenString: state.token.tokenString};
};

const mapDispatchToProps = (dispatch) => ({
  toggleSearchSwitch: () => dispatch(toggleSearchSwitch()),
  handleInputChange: (event) => dispatch(setInputValue(event.target.value)),
  search: (term, tokenString) => search(dispatch, term, tokenString),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registration);