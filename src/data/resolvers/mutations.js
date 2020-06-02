import * as employeeMutation from './mutations/employee_mutations';

export const resolverMutations = () => {
    return {
        addUser: employeeMutation.addUser()
    }
}