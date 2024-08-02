# How to configure Vite to load environment variables in ECMAScript modules

To use `process.env` variables in a Vite project with ECMAScript modules, you need to configure Vite to load environment variables from a `.env` file. Here's a step-by-step guide:

1. Create a `.env` file in the root of your project:

-   `.env`
```env
# Sample
PORT=8000
DS_API_URL=http://localhost:8002
DS_API_TOKEN=SUPERSECRET
DATABASE_URL=postgres://docker:docker@127.0.0.1:5400/api-dev
TESTING_DATABASE_URL=postgres://docker:docker@127.0.0.1:5400/api-dev-testing
OKTA_URL_ISSUER=https://example.okta.com/oauth2/default
OKTA_CLIENT_ID=example
ORG_URL=https://example.okta.com
API_TOKEN=SUPERSECRET

VITE_API_URI=http://example.com/api
VITE_EXAMPLE_URL=https://jsonplaceholder.typicode.com/photos?albumId=1
```

Note that Vite automatically prefixes environment variables with `VITE_` to expose them to your application. Any other variables won't be exposed to the client-side code.

2. Update your `vite.config.js` file to include environment variables:

- `vite.config.js`
```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  }
});
```

This configuration ensures that the process.env variables are available in your project.

3. Use environment variables in your code:

In your `src/api/index.js` file, you can access the environment variable like this:

- `src/api/index.js`

```js
import axios from "axios";

// Define the API URLs using the environment variables
const apiUrl = `${import.meta.env.VITE_API_URI}/profiles`;
const exampleUrl = import.meta.env.VITE_EXAMPLE_URL;

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
    throw new Error("Not authenticated");
  }
  return { Authorization: `Bearer ${authState.accessToken}` };
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

export { sleep, getExampleData, getProfileData };
```

4. Ensure ESLint configuration is set up properly:

- `.eslintrc.cjs`

```js

```