import React, { useState } from 'react';

export const useCustomState = (initialValue) => {
  const [state, setState] = useState(initialValue);

  const customSetState = (newState) => {
    setState(prevState => ({
      ...prevState,
      ...newState,
    }));
  };

  return [state, customSetState];
}