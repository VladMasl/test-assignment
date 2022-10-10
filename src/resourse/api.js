import axios from 'axios';

axios.defaults.baseURL =
'https://frontend-test-assignment-api.abz.agency/api/v1';

export const getUsersApi = async page => {
console.log(page);
  return await axios.get(`/users?page=${page}&count=6`).then(({ data }) => {
    return data;
  });
};

export const addUsersApi = async users => {
  return await axios.post('/users', users).then(({ data }) => {
    return data;
  });
};
