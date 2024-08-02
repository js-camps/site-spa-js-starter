import axios from 'axios';
// import process from '../../.eslintrc.cjs';

// Define the API URL directly here.
const apiUrl = `https://example.com/api/profiles`;

const sleep = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const getExampleData = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then((response) => response.data);
};

const getAuthHeader = (authState) => {
  if (!authState.isAuthenticated) {
    throw new Error('Not authenticated');
  }
  return { Authorization: `Bearer ${authState.accessToken}` };
};

const apiAuthGet = (authHeader) => {
  return axios.get(apiUrl, { headers: authHeader });
};

const getProfileData = (authState) => {
  try {
    return apiAuthGet(getAuthHeader(authState)).then(
      (response) => response.data,
    );
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

export { sleep, getExampleData, getProfileData };
