import { resolverMutations } from './resolvers/mutations';
import { resolverQueries } from './resolvers/queries';
// import * as relationship from './resolvers/relationship/';

const GraphQLJSON = require('graphql-type-json');

const resolvers = {
    Mutation: resolverMutations(),
    Query: resolverQueries(),

    // Emp: relationship.employeeRelationship(),
    JSON: GraphQLJSON
};

export { resolvers };

