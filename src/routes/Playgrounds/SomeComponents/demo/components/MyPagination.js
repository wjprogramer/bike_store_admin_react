import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';

const MyPagination = (props) => {
  const { activePage, totalPages, onChange } = props;

  const gotoPreviousPage = (page) => {
    if (page >= 0) {
      onChange(page);
    }
  }

  const gotoNextPage = (page) => {
    if (page <= totalPages - 1) {
      onChange(page);
    }
  }

  return (
    <div>
      <Pagination aria-label="Page navigation example">
        {/* First Page */}
        <PaginationItem>
            <PaginationLink previous href="#" onClick={ (e) => onChange(0) }>
                <i className="fa fa-fw fa-angle-double-left"></i>
            </PaginationLink>
        </PaginationItem>

        {/* Previous Page */}
        <PaginationItem>
            <PaginationLink previous href="#" onClick={ (e) => gotoPreviousPage(activePage - 1) }>
                <i className="fa fa-fw fa-angle-left"></i>
            </PaginationLink>
        </PaginationItem>
        
        {/* Certain Pages */}
        {
          Array.from(Array(totalPages), (e, i) => {
            return <PaginationItem key={ i } active={ i == activePage }>
                <PaginationLink href="#" onClick={ (e) => onChange(i) }>
                    {i + 1}
                </PaginationLink>
            </PaginationItem>;
          })
        }

        {/* Next Page */}
        <PaginationItem>
            <PaginationLink next href="#" onClick={ (e) => gotoNextPage(activePage + 1) }>
                <i className="fa fa-fw fa-angle-right"></i>
            </PaginationLink>
        </PaginationItem>

        {/* Last Page */}
        <PaginationItem>
            <PaginationLink next href="#"  onClick={ (e) => onChange(totalPages - 1) }>
                <i className="fa fa-fw fa-angle-double-right"></i>
            </PaginationLink>
        </PaginationItem>
      </Pagination>
    </div>
  );
}

export default MyPagination;
