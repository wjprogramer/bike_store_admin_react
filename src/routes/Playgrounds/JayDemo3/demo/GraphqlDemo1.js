import React, { useState, useEffect } from 'react';
import { graphql, buildSchema } from 'graphql';
import {
  sleep
} from '../../../../utils/common';

const GraphqlDemo1 = (props) => {
  const [result, setResult] = useState(null);

  let schema = buildSchema(`
    type Query {
      hello: String
    }
  `);
  let root = { hello: () => 'Hello world!' };

  const fetchData = async() => {
    if (result != null) {
      return;
    }

    var res = await graphql(schema, '{ hello }', root);
    await sleep(5000);

    setResult(res.data.hello);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <p>
      Result: { result }
    </p>
  )};

export default GraphqlDemo1;
