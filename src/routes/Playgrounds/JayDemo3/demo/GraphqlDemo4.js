import React, { useState, useEffect } from 'react';
import { 
  graphql, 
  buildSchema,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  DirectiveLocation, 
} from 'graphql';
import { v4 as uuidv4 } from 'uuid';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        },
      },
    },
  }),
});

// TODO: 未完成
const GraphqlDemo4 = (props) => {
  // =============================================================================================
  const query = '{ hello }';

  graphql(schema, query).then((result) => {
    // Prints
    // {
    //   data: { hello: "world" }
    // }
    console.log(result);
  });

  // =============================================================================================
  var query2 = '{ BoyHowdy }';

  graphql(schema, query2).then((result) => {
    // Prints
    // {
    //   errors: [
    //     { message: 'Cannot query field BoyHowdy on RootQueryType',
    //       locations: [ { line: 1, column: 3 } ] }
    //   ]
    // }
    console.log(result);
  });

  return (
    <div>
      {/* {
        Object.entries(quotes).map((e) => (
          <div key={e[0]}>
            {e[1].phrase}
          </div>
        ))
      } */}
    </div>
  )};

export default GraphqlDemo4;
