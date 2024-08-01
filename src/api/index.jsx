import axios from 'axios';

// we will define a bunch of API calls here.

const sleep = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const getExampleData = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then((response) => response.data);
};

const submitLogin = async () => {
  // Fake API call to simulate login
  await sleep(1000);
  return { data: { token: 'fake-token' } };
};

export { sleep, getExampleData, submitLogin };
