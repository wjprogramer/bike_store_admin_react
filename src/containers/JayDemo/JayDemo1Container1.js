import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import  * as actionCreates  from '../../redux/actions/JayDemo1/actions'

import JayDemo1 from '../../routes/Playgrounds/JayDemo1';

const mapStateToProps = state => ({
  data: state.fakeReducer.data,
  user: state.fakeReducer.user,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreates, dispatch),
  dispatch,
});


export default connect(mapStateToProps, mapDispatchToProps)(JayDemo1);