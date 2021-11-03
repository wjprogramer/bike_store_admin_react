import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import MyPagination from './components/MyPagination';
import { useCustomState } from '../../../../utils/hooks';

const PaginationDemo1 = (props) => {
  const [state, setState] = useCustomState({
    activePage: 1,
  });

  useEffect(() => {
    // get data
  }, [state.activePage]);

  const handlePageChange = (activePage) => {
    setState({
      activePage: activePage,
    });
  }

  return (
    <div>
      
      <div className="mb-3">
        ActivePage: { state.activePage + 1 }
      </div>

      <MyPagination
        activePage={ state.activePage }
        totalPages={ 10 }
        onChange={ e => handlePageChange(e) }
      />
    </div>
  );
}

export default PaginationDemo1;
