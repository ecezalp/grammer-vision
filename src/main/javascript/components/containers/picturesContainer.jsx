import {connect} from 'react-redux'
import PicturesViewer from "../presentationals/picturesViewer";

const mapStateToProps = state => {
  return state.pictures;
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PicturesViewer);