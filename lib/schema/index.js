import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInt
} from 'graphql';

import CourseType from './courseType';
import {getCourse, getCourses} from '../domain/course/store';

const RootQuery = new GraphQLObjectType({
  name: 'RootSchema',
  description: "Root Schema",
  fields: () => ({
    hello: {
      type: GraphQLString,
      description: "Sample string",
      resolve: () => 'world'
    },
    course: {
      type: CourseType,
      description: 'Course',
      args: {
        id: {
          description: 'id of the Course',
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      resolve: (root, {id}) => getCourse(id)
    },
    courses: {
      type: new GraphQLList(CourseType),
      description: "List of Courses in the system",
      resolve: function() {
        return getCourses();
      }
    }
  })
});

export default new GraphQLSchema({
  query: RootQuery
});