
import { Query } from './query_definition';
import { Mutation } from './mutation_definition';
import { Scalar } from './scalar_definition';

export const typeDefs = [

    Mutation,
    Query,
    Scalar,
    `schema {
        mutation: Mutation,
        query : Query
    }
    `
]

