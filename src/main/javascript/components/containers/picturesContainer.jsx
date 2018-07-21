import {connect} from 'react-redux'
import Pictures from "../presentationals/pages/pictures";
import {
  setActivePictureIndex
} from "../../actions/actionCreators";
import {getPictureTags, search} from '../../actions/asyncActionCreators';


const mapStateToProps = state => state.pictures;

const mapDispatchToProps = (dispatch) => ({
  setActivePictureIndex: (newIndex) => dispatch(setActivePictureIndex(newIndex)),
  getPictureTags: (picture) => getPictureTags(dispatch, picture),
  handleFormSubmit: (searchTerm) => search(dispatch, searchTerm),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pictures);