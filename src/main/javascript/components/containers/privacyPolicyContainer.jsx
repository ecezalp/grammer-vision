import {connect} from 'react-redux'
import PrivacyPolicy from "../presentationals/elements/privacyPolicy";

const mapStateToProps = state => ({...state.privacy});

export default connect(
  mapStateToProps,
  null,
)(PrivacyPolicy);