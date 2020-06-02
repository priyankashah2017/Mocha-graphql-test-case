import * as definitions from './definitions/mutations';

export const Mutation = `
type Mutation {
    ${definitions.EmployeeDefinitions}
}
`;
