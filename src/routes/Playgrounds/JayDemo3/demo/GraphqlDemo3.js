import React, { useState, useEffect } from 'react';
import { 
  graphql, 
  buildSchema,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  DirectiveLocation, 
} 
from 'graphql';
import { v4 as uuidv4 } from 'uuid';

const GraphqlDemo3 = (props) => {
  const typeDefs = buildSchema(`
    type Quote {
      id: ID!
      phrase: String!
      quotee: String
    }

    type Query {
      quotes: [Quote]
    }
  `);

  const id1 = uuidv4();

  const initialData = {
    [id1]: { phrase: "I'm a leaf on the wind. Watch how I soar.", quotee: "Wash" },
    [uuidv4()]: { phrase: "We're all stories in the end.", quotee: "The Doctor" },
    [uuidv4()]: { phrase: "Woah!", quotee: "Neo" }
  };

  const [quotes, updateQuotes] = useState(initialData);

  // Start with a few initial quotes
  const addQuote = quote => {
    const id = uuidv4();
    quotes[id] = { ...quote, id };
    updateQuotes(quotes);
  };

  useEffect(() => {
    // addQuote({ phrase: "文章 - 1", quotee: "引用 - 1" });
    // addQuote({ phrase: "文章 - 2", quotee: "引用 - 2" });
    // addQuote({ phrase: "文章 - 3", quotee: "引用 - 3" });
  });

  const resolvers = {
    Query: {
      quotes: () => Object.values(quotes),
    },
  };
  
  return (
    <div>
      {
        Object.entries(quotes).map((e) => (
          <div key={e[0]}>
            {e[1].phrase}
          </div>
        ))
      }
    </div>
  )};

export default GraphqlDemo3;
