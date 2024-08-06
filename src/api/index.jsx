import axios from 'axios';

// Define the API URLs using the environment variables
// const apiUrl = `${import.meta.env.VITE_API_URI}/profiles`;
const apiUrl = import.meta.env.VITE_EXAMPLE_URL;
const exampleUrl = import.meta.env.VITE_EXAMPLE_URL;

const getDSData = url => {
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .get(url)
    .then(res => JSON.parse(res.data))
    .catch(err => console.log('ERROR', err));
};

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const getExampleData = () => {
  return axios
    .get(exampleUrl)
    .then(response => response.data);
};

const getAuthHeader = authState => {
  if (!authState.isAuthenticated) {
    throw new Error('Not authenticated');
  }
  return { Authorization: `Bearer ${authState.idToken}` };
};

const apiAuthGet = authHeader => {
  return axios.get(apiUrl, { headers: authHeader });
};
const getProfileData = authState => {
  try {
    return apiAuthGet(getAuthHeader(authState)).then(response => response.data);
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};
export { sleep, getExampleData, getProfileData, getDSData };
