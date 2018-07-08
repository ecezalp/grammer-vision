import {connect} from 'react-redux'
import PicturesViewer from "../presentationals/picturesViewer";
import {
  setActivePictureIndex
} from "../../actions/actionCreators";
import {getPictureTags} from '../../actions/asyncActionCreators';


const mapStateToProps = state => state.pictures;

const mapDispatchToProps = (dispatch) => ({
  setActivePictureIndex: (newIndex) => dispatch(setActivePictureIndex(newIndex)),
  getPictureTags: (picture) => getPictureTags(dispatch, picture),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PicturesViewer);