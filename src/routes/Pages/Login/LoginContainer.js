
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import  * as actionCreates  from '../../../redux/actions/userActions'
import Login from "./Login";

const mapStateToProps = (state, props) => {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreates, dispatch),
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
