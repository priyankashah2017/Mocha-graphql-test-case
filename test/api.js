import axios from 'axios';

const API_URL = 'http://localhost:5050/test/graphql';

export const getUser = async variables =>

  axios.post(API_URL, {
    query: `
      query ($id: Int!) {
        getUser(id: $id) 
      }
    `,
    variables,
  });


export const addUser = async variables =>

  axios.post(API_URL, {
    query: `
      mutation addUser($id: Int!, $name: String, $email: String) {
        addUser(id: $id, name: $name, email: $email) 
      }
    `,
    variables,
  });
