
```
/vite-react-spa-js-starter
├── src 
│  ├── __test__ 
│  │	├── ExampleListContainer.test.jsx 
│  │	├── FormButton.test.jsx 
│  │	├── FormInput.test.jsx 
│  │	├── List.test.jsx 
│  │	├── LoadingComponent.test.jsx 
│  │	├── NotFoundPage.test.jsx 
│  │	├── ProfileListContainer.test.jsx 
│  │	├── Readme.md 
│  │	├── RenderExampleListPage.test.jsx 
│  │	├── RenderHomePage.test.jsx
│  │	└── setupTests.jsx
│  ├── api 
│  │	├── index.jsx 
│  │	└── Data.jsxgit  
│  ├── assets 
│  │	├── react.svg
│  │	└── vite.svg 
│  ├── components 
│  │	├── common 
│  │	│      ├── Button.jsx 
│  │	│      ├── FormButton.jsx 
│  │	│      ├── FormInput.jsx 
│  │	│      ├── index.jsx 
│  │	│      ├── List.jsx 
│  │	│      └── LoadingComponent.jsx 
│  │	└── pages 
│  │	        ├── ExampleDataViz 
│  │	        │     ├── DataViz.jsx 
│  │	        │     ├── DataVizContainer.jsx 
│  │	        │     └── index.jsx 
│  │	        ├── ExampleList 
│  │	        │     ├── ExampleListContainer.jsx 
│  │	        │     ├── index.jsx 
│  │	        │     └── RenderExampleListPage.jsx 
│  │	        ├── Home 
│  │	        │     ├── HomeContainer.jsx 
│  │	        │     ├── index.jsx 
│  │	        │     └── RenderHomePage.jsx 
│  │	        ├── Login 
│  │	        │     ├── index.jsx 
│  │	        │     └── LoginContainer.jsx 
│  │	        ├── NotFound 
│  │	        │     ├── index.jsx 
│  │	        │     └── NotFoundPage.jsx 
│  │	        └── ProfileList 
│  │	                ├── index.jsx 
│  │	                ├── ProfileListContainer.jsx 
│  │	                └── RenderProfileListPage.jsx 
│  ├── state 
│  │	├── action 
│  │	│      └── index.jsx 
│  │	└── reducer 
│  │	        └── index.jsx 
│  ├── styles 
│  │	├── App.css
│  │	└── index.css 
│  ├── utils 
│  │	├── oktaConfig.jsx
│  │	└── Readme.md 
│  └── main.jsx
├── index.html
├── .env 
├── .eslintrc.cjs 
├── package.json 
├── vitest.config.js 
└── …
```

.env
```
VITE_API_URI=http://example.com/api
VITE_EXAMPLE_URL=https://jsonplaceholder.typicode.com/photos?albumId=1
```

index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Basic SPA</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

src/main.jsx
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  // useHistory,
  Switch,
} from 'react-router-dom';

import { NotFoundPage } from './components/pages/NotFound';
import { ExampleListPage } from './components/pages/ExampleList';
import { ProfileListPage } from './components/pages/ProfileList';
import { LoginPage } from './components/pages/Login';
import { HomePage } from './components/pages/Home';
import { ExampleDataViz } from './components/pages/ExampleDataViz';
import { LoadingComponent } from './components/common';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
);

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  // const history = useHistory();
  //
  // const authHandler = () => {
  //   // We pass this to our <Security /> component that wraps our routes.
  //   // It'll automatically check if userToken is available and push back to login if not :)
  //   history.push('/login');
  // };

  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      {/* any of the routes you need secured should be registered as SecureRoutes */}
      <Route
        path="/"
        exact
        component={() => <HomePage LoadingComponent={LoadingComponent} />}
      />
      <Route path="/example-list" component={ExampleListPage} />
      <Route path="/profile-list" component={ProfileListPage} />
      // <Route path="/datavis" component={ExampleDataViz} />
      <Route component={NotFoundPage} />
    </Switch>
  );
```

src/api/index.jsx
```jsx
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

const sleep = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const getExampleData = () => {
  return axios.get(exampleUrl).then((response) => response.data);
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

export { sleep, getExampleData, getProfileData, getDSData };
```

src/api/Data.jsx
```jsx
const lineChartData = {
  data: [
    {
      x: [1, 2, 3, 4, 5],
      y: [10, 15, 13, 17, 22],
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'red' },
    },
  ],
  layout: { title: 'Line Chart Example' },
};

const lineChartDataCanada = {
  data: [
    {
      x: [1, 2, 3, 4, 5],
      y: [12, 18, 14, 19, 25],
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'blue' },
    },
  ],
  layout: { title: 'Line Chart Canada' },
};

const barChartData = {
  data: [
    {
      x: ['A', 'B', 'C', 'D'],
      y: [20, 14, 23, 17],
      type: 'bar',
    },
  ],
  layout: { title: 'Bar Chart Example' },
};

const getDSData = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (url) {
        case 'https://example.com/linechart':
          resolve(lineChartData);
          break;
        case 'https://example.com/linechart?country=Canada':
          resolve(lineChartDataCanada);
          break;
        case 'https://example.com/barchart':
          resolve(barChartData);
          break;
        default:
          reject('Unknown URL');
      }
    }, 1000); // Simulate network delay
  });
};

export { getDSData };
```

common

src/components/pages/common/Button.jsx
```jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Button = (props) => {
  // Here is a button for use when simply in need of a button that doesn't require to be wrapped in a form.
  // contains a click property for your use onClick
  return (
    <button
      onClick={props.handleClick}
      disabled={props.disabled}
      className={props.classType || 'primary'}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;
```

src/components/pages/common/FormButton.jsx
```jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const FormButton = (props) => {
  // notice we don't pass a click handler to this component. It's supposed to be used as a FormButton only.
  // You'd want to use an onSubmit on the Form Element itself to keep your forms organized.
  return (
    <button disabled={props.disabled} className={props.classType || 'primary'}>
      {props.buttonText}
    </button>
  );
};

export default FormButton;

FormButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  classType: PropTypes.string,
  disabled: PropTypes.bool,
};
```

src/components/pages/common/FormInput.jsx
```jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const FormInput = (props) => {
  return (
    <>
      <label htmlFor={props.labelId}>{props.labelId}:</label>
      <input
        id={props.labelId}
        name={props.labelId}
        value={props.value}
        onChange={(input) => props.handleInput(input)}
        placeholder={props.placeholder}
      />
    </>
  );
};

FormInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleInput: PropTypes.func,
};

export default FormInput;
```

src/components/pages/common/index.jsx
```jsx
import FormButton from './FormButton';
import FormInput from './FormInput';
import List from './List';
import LoadingComponent from './LoadingComponent';
import Button from './Button';
// notice we're building out a 'package' of reusables here and exporting them as an object of component properties.
// to use this, simply `import {foo, bar, baz} from '<path-to-this-directory>/ReusableComponents';`
export { FormButton, FormInput, List, LoadingComponent, Button };
```

src/components/pages/common/List.jsx
```jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Here is an example of a reusable list component.
// We are passing all of its functions through props to keep our component clean & testable
// Feel free to add to this component with some more advanced features of your own
const List = ({ LoadingComponent, RenderItems, getItemsData }) => {
  const [items, setItems] = useState([]);
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    // Here we are performing our GET request through the use of our
    // Axios helper function that we will receive through props
    getItemsData()
      .then((items) => {
        setItems(items);
      })
      .catch((error) => {
        console.error(error);
        // Be sure to add functionality that displays errors to your UI here.
        // We want our users to know whether something has gone wrong with our request.
      })
      .finally(() => {
        setFetching(false);
      });
  }, [getItemsData]);

  // Here we return a loading component while our request is fetching
  // or we render our list of items from the data we receive from our successful request
  // We can change and swap these out through props!
  return isFetching ? <LoadingComponent /> : <RenderItems data={items} />;
};

export default List;

List.propTypes = {
  LoadingComponent: PropTypes.func.isRequired,
  RenderItems: PropTypes.func.isRequired,
  getItemsData: PropTypes.func.isRequired,
};

```

src/components/pages/common/LoadingComponent.md
```jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function LoadingComponent(props) {
  const { message } = props;

  return <div>{message}</div>;
}

export default LoadingComponent;

LoadingComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
```

Home

src/components/pages/Home/HomeContainer.jsx
```jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import RenderHomePage from './RenderHomePage';

// eslint-disable-next-line react/prop-types
function HomeContainer({ LoadingComponent }) {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = () => {
      setTimeout(() => {
        let info = { name: 'Richard' };
        setUserInfo(info);
      }, 1000); // Simulate a delay
    };

    fetchUserInfo();
  }, []);

  return !userInfo || !userInfo.name ? (
    <LoadingComponent message="... Fetching user profile" />
  ) : (
    <RenderHomePage userInfo={userInfo} />
  );
}

export default HomeContainer;
```

src/components/pages/Home/index.jsx
```jsx
export { default as HomePage } from './HomeContainer';

// export default HomeContainer;
```

src/components/pages/Home/RenderHomePage.jsx
```jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common';

function RenderHomePage(props) {
  const {
    // eslint-disable-next-line react/prop-types
    userInfo,
    // authService
  } = props;
  return (
    <div>
      <h1>Welcome to Labs Basic SPA</h1>
      {/* eslint-disable-next-line react/prop-types */}
      <h3>Hi {userInfo.name}, you are more than welcome!</h3>
      <div>
        <p>
          This is an example of a common example of how we&apos;d like for you to
          approach components.
        </p>
        <p>
          <Link to="/profile-list">Profiles</Link>
        </p>
        <p>
          <Button
            buttonText="Logout"
            // handleClick={() => authService.logout()}
          />
        </p>
      </div>
    </div>
  );
}
export default RenderHomePage;
```

Login

src/components/pages/Home/index.jsx
```jsx
export { default as LoginPage } from './LoginContainer';
```

src/components/pages/Home/LoginContainer.jsx
```jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FormButton, FormInput } from '../../common';
// import { submitLogin } from '../../../api';

const LoginContainer = () => {
  const [userPassword, setUserPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clickHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    // try {
    //   await submitLogin({
    //     username: userEmail,
    //     password: userPassword,
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
    // setIsSubmitting(false);
  };

  const inputHandler = (input) => {
    const userInput = input.target;
    if (userInput.name === 'Email') {
      setUserEmail(userInput.value);
    } else if (userInput.name === 'Password') {
      setUserPassword(userInput.value);
    }
    // now you can grab the token and do whatever you need with it.
    // console.log(accessToken)
  };

  return (
    <form>
      <FormInput
        placeholder="User Name"
        labelId="Email"
        value={userEmail}
        handleInput={inputHandler}
      />
      <FormInput
        placeholder="Password"
        labelId="Password"
        value={userPassword}
        handleInput={inputHandler}
      />
      <FormButton
        handleButtonClick={clickHandler}
        classType="primary"
        buttonText="Click"
        isDisabled={isSubmitting}
      />
    </form>
  );
};

export default LoginContainer;
```


ExampleList

src/components/pages/ExampleList/ExampleListContainer.jsx
```jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { getExampleData } from '../../../api';

import { List } from '../../common';
import RenderExampleListPage from './RenderExampleListPage';

// Here is an example of using our reusable List component to display some list data to the UI.
const ExampleList = () => {
  return (
    <List
      // Here we are passing our Axios request helper function as a callback.
      getItemsData={getExampleData}
      // Here we are passing in a component we want to show whilst waiting for our API request
      // to complete.
      LoadingComponent={() => <div>Loading Items...</div>}
      // Here we are passing in a component that receives our new data and returns our JSX elements.
      RenderItems={RenderExampleListPage}
    />
  );
};

export default ExampleList;
```

src/components/pages/ExampleList/index

```jsx
export { default as ExampleListPage } from './ExampleListContainer';
```

src/components/pages/ExampleList/RenderExampleListPage.jsx
```jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const RenderExampleListPage = (props) => (
  <div>
    {props.data.map((item) => (
      <figure key={item.id}>
        <img src={item.thumbnailUrl} alt={item.title} />
        <figcaption>
          <h3>{item.title}</h3>
        </figcaption>
      </figure>
    ))}
  </div>
);

export default RenderExampleListPage;

// Don't forget your prop types! It will save you a lot of debugging headache as you add more features.
RenderExampleListPage.propTypes = {
  data: PropTypes.arrayOf(
    // Here is an example of enforcing an object structure that we expect to receive in our props:
    PropTypes.shape({
      // Here we require an id of type number or string to prevent a "unique key prop" warning
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      title: PropTypes.string,
      url: PropTypes.string,
      thumbnailUrl: PropTypes.string,
    }),
  ).isRequired,
};
```

ExampleDataViz

src/components/pages/ExampleDataViz/DataViz.jsx
```jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import PropTypes from 'prop-types';
import { getDSData } from '../../../api/Data.jsx';

const initialState = {
  data: [],
  layout: {},
  frames: [],
  config: {
    displaylogo: false,
    displayModeBar: false,
  },
};

const PlotComponent = ({ url }) => {
  const [plotData, setPlotData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    getDSData(url)
      .then(res => {
        if (isMounted) {
          setPlotData(res);
          setIsLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Plot
      className="DataViz"
      data={plotData.data}
      layout={plotData.layout}
      frames={plotData.frames}
      config={plotData.config}
    />
  );
};

PlotComponent.propTypes = {
  url: PropTypes.string.isRequired,
};

const DataViz = ({ urls }) => (
  <>
    {urls.map((url, index) => (
      <PlotComponent key={index} url={url} />
    ))}
  </>
);

DataViz.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DataViz;
```

src/components/pages/ExampleDataViz/DataVizContainer.jsx
```jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import DataViz from './DataViz';

const DataVizContainer = () => {
  const urls = [
    'https://example.com/linechart',
    'https://example.com/linechart?country=Canada',
    'https://example.com/barchart'
  ];

  return <DataViz urls={urls} />;
};

export default DataVizContainer;
```

src/components/pages/ExampleDataViz/index.jsx
```jsx
import DataVizContainer from './DataVizContainer';

export { DataVizContainer as ExampleDataViz };
```
