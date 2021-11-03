import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Card from './../Card';

import { Provider } from './context';

export const Accordion = (props) => {
  const [isOpen, setIsOpen] = useState(props.initialOpen);

  if (props.open !== 'undefined' && props.onToggle === 'undefined') {
    throw "Accordion: props.open has to be used combined with props.onToggle " +
      "use props.initialOpen to create an uncontrolled Accordion."
  }

  const toggleHandler = () => {
    const { onToggle } = props;

    if (!onToggle) {
      setIsOpen(!isOpen);
    } else {
      onToggle(!props.open);
    }
  }

  const checkIsOpen = () => {
    return !props.onToggle ? isOpen : props.open;
  }

  const { className, children, initialOpen, ...otherProps } = props;
  
  return (
    <Provider
      value={{
        onToggle: toggleHandler,
        isOpen: checkIsOpen()
      }}
    >
      <Card className={ className } { ...otherProps }>
        { children }
      </Card>
    </Provider>
  );
}

Accordion.propTypes = {
  initialOpen: PropTypes.bool,
  onToggle: PropTypes.func,
  open: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};