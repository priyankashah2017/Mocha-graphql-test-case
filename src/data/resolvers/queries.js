import * as authQuery from './queries/auth_query';

export const resolverQueries = () => {
    return {

        getUser: authQuery.getUser(),
    }
}