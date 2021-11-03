import React, { useState, useEffect } from 'react';
import { graphql, buildSchema } from 'graphql';
import {
  sleep
} from '../../../../utils/common';

const GraphqlDemo2 = (props) => {
  const [result, setResult] = useState(null);

  let schema = buildSchema(`
    type Query {
      hello: String
    }
  `);
  let root = { hello: () => 'Hello world!' };

  const fetchData = async() => {
    var res = await graphql(schema, '{ hello }', root);
    return res;
  };

  useEffect(() => {
    if (result != null) {
      return;
    }

    fetchData()
      .then(res => setResult(res.data.hello));
  });

  return (
    <p>
      Result: { result }
    </p>
  )};

export default GraphqlDemo2;
