import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

import { Consumer } from './context';

const CheckableInput = (props) => {
  useEffect(() => {
    if (props.defaultChecked) {
      props.toggle(props.defaultChecked);
    }
  }, []);

  const { tag, isChecked, toggle, ...otherProps } = props;
  const Tag = tag;

  return (
    <Tag
      checked={ isChecked }
      onChange={ (e) => { toggle(e.target.checked) } }
      { ...otherProps }
    />
  );
};
CheckableInput.propTypes = {
  tag: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string
  ]),
  type: PropTypes.string,
  defaultChecked: PropTypes.bool,
  toggle: PropTypes.func,
  isChecked: PropTypes.bool
};
CheckableInput.defaultProps = {
  tag: Input,
  type: "checkbox"
};

const ContextCheckableInput = (props) => (
    <Consumer>
    {
      (value) => (
        <CheckableInput { ...{ ...props, ...value } } />
      )
    }
    </Consumer>
);

export { ContextCheckableInput as CheckableInput };
