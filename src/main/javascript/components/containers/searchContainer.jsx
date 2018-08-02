import {connect} from 'react-redux'
import Search from "../presentationals/elements/search";
import {setInputValue} from "../../actions/actionCreators";
import {search} from '../../actions/asyncActionCreators';

const mapStateToProps = state => state.input;

const mapDispatchToProps = (dispatch) => ({
  handleInputChange: (event) => dispatch(setInputValue(event.target.value)),
  search: (term) => search(dispatch, term),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);