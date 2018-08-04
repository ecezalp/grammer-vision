import {connect} from 'react-redux'
import Search from "../presentationals/elements/search";
import {setInputValue, toggleSearchSwitch} from "../../actions/actionCreators";
import {search} from '../../actions/asyncActionCreators';

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
)(Search);