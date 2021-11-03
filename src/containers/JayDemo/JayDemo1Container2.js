import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FETCH_DATA, FETCH_USER } from '../../reducers/FakeReducer';

const JayDemo1Container2 = (props) => {
  const { data, user } = props;
  useEffect(() => {
    // props.getUser();
    // props.getData();
  }, []);

  return (
    <>
      這並非真的 container，而是簡易地展示 redux 的使用
      <hr />
      <div>
        {JSON.stringify(data)}
      </div>
      <div>
        {JSON.stringify(user)}
      </div>
    </>
  );
};

JayDemo1Container2.propTypes = {
  data: PropTypes.shape({}),
  user: PropTypes.shape({}),
  getData: PropTypes.func,
  getUser: PropTypes.func,
};

JayDemo1Container2.defaultProps = {
  data: {},
  user: {},
  getData: () => {},
  getUser: () => {},
};

const mapStateToProps = state => ({
  data: state.fakeReducer.data,
  user: state.fakeReducer.user,
});

const mapDispatchToProps = dispatch => ({
  getData: () => { dispatch({ type: FETCH_DATA }); },
  getUser: () => { dispatch({ type: FETCH_USER }); },
});


export default connect(mapStateToProps, mapDispatchToProps)(JayDemo1Container2);