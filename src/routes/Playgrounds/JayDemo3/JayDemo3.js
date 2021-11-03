import React, { useState, useEffect, useRef } from 'react';
import {
    Container
} from '../../../components';
import { HeaderMain } from "../../components/HeaderMain";

import GraphqlDemo1 from './demo/GraphqlDemo1';
import GraphqlDemo2 from './demo/GraphqlDemo2';
import GraphqlDemo3 from './demo/GraphqlDemo3';
import GraphqlDemo4 from './demo/GraphqlDemo4';

// graphql demo
const JayDemo3 = (props) => {
  return (
    <React.Fragment>
      <Container fluid={ false }>
        <div className="d-flex mt-3 mb-5">
            <HeaderMain 
              title="GraphQL"
              className="mt-0"
            />
        </div>
        <p>
          GraphQL demo
        </p>
        <hr />

        <GraphqlDemo1 />
        <hr />

        <GraphqlDemo2 />
        <hr />

        <GraphqlDemo3 />
        <hr />

        <GraphqlDemo4 />
        <hr />


      </Container>
    </React.Fragment>
  )};

export default JayDemo3;
