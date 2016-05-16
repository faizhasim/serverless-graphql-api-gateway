import {graphql} from 'graphql';
import Schema from './schema';

export function runGraphQL(event, context, cb) {
  let query = event.query;

  // patch to allow queries from GraphiQL
  // like the initial introspectionQuery
  if (event.query && event.query.hasOwnProperty('query')) {
    query = event.query.query.replace("\n", ' ', "g");
  }

  return graphql(Schema, query).then( function(result) {
    return cb(null, result);
  });
}