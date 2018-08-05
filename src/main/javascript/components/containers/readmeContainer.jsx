import {connect} from 'react-redux'
import Readme from "../presentationals/elements/readme";

const mapStateToProps = state => ({...state.privacy});

export default connect(
  mapStateToProps,
  null,
)(Readme);