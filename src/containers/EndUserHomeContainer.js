import { connect } from 'react-redux';
import _ from 'lodash';
import EndUserHome from '../components/EndUserHome/EndUserHome';
import actions from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    dogs: _.get(state, 'dogs.dogs', [])
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllDogs: actions.getAllDogs(dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EndUserHome)