

export const addUser = () => {
  return async (_, args, ctx) => {
    console.log("Add User --", args);

    return args;

  }
}
