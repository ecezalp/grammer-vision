import {connect} from 'react-redux'
import Checkbox from "../presentationals/elements/checkbox";
import {setCheckboxChecked, setLoginButton} from "../../actions/actionCreators";

const mapStateToProps = state => ({...state.privacy.checkbox});

const mapDispatchToProps = dispatch => ({
  handleClick: (isChecked) => {
    dispatch(setCheckboxChecked(isChecked));
    dispatch(setLoginButton(isChecked));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Checkbox);