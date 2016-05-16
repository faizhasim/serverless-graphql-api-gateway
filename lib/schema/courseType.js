import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} from 'graphql';

export default new GraphQLObjectType({
  name: "Course",
  description: "Course of a Learning Management System",
  fields: () => ({
    id: {type: GraphQLInt},
    title: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});