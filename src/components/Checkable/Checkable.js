import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Provider } from './context';

const Checkable = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const { tag, children, ...otherProps } = props;
  const Tag = props.tag;

  return (
    <Provider
      value={{
        isChecked: isChecked,
        toggle: (enabled) => { setIsChecked(enabled || !isChecked) }
      }}
    >
      <Tag { ...otherProps }>
        { children }
      </Tag>
    </Provider>
  );
};
Checkable.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string
  ]),
};
Checkable.defaultProps = {
  tag: "div"
};

export { Checkable };
