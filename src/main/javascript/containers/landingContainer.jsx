import {connect} from 'react-redux'
import {getTokenUrlRequest} from '../actions/asyncActionCreators'
import ReduxLanding from '../components/reduxLanding'

const mapStateToProps = state => {
  console.log(state);
  return {
    tokenString: state.token.tokenString,
    isFetchingToken: state.token.isFetchingToken
  };
};

const mapDispatchToProps = (dispatch) => ({
  getInstaToken: () => getTokenUrlRequest(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxLanding);