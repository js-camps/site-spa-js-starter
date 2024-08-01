# Site SPA Starter - JS

This project was bootstrapped with [Vite](https://vitejs.dev/guide/) + [React](https://stackblitz.com/edit/vitejs-vite-5hwepw?file=index.html&terminal=dev)

## Scaffolding Your First Vite Project

```sh
npm create vite@latest
```

The template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## The testing framework - Vitest

When using Vite with React, the recommended testing framework is `Vitest`.

**Project Structure**

```shell
/your-project
├── node_modules
├── src
│   ├── App.jsx
│   ├── __test__
│   │   └── App.test.jsx
│   │   └── setupTests.js
├── vitest.config.js
├── package.json
└── ...
```

1. **Install Vitest**:

```shell
npm install -D jsdom vitest @testing-library/react @testing-library/jest-dom
```

2. **Configure Vitest**:

**Create or  a `vite.config.js` file (if you don't have one already) and add the following**:

   -   `vite.config.js`
```shell
import { defineConfig } from 'vitest/config';

export default defineConfig({
  // plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__test__/setupTests.js',
  },
});
```

**Create or  a `setupTests.js` file (if you don't have one already) and add the following**:

   -   `setupTests.js`
```shell
import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

// Log the matchers to debug
console.log('Matchers:', matchers);

// Ensure the matchers are correctly imported and used
if (Object.keys(matchers).length > 0) {
    expect.extend(matchers);
} else {
    console.error('Matchers object is undefined or null');
}
```

**Add `import React from 'react';` in `App.jsx` needed by `Vitest`**:

  -   `App.jsx`
```js
import React from 'react';
```

3.  **Write your tests**:

    **Create a test file (e.g., `App.test.jsx`) and write your tests using React Testing Library**:

-   App.test.jsx
```shell
import React from 'react';

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
    it('renders welcome message', () => {
        render(<App />);

        screen.debug(); // This will log the rendered HTML to the console
        const welcomeElement = screen.getByText(/Click on the Vite and React logos to learn more/i);
        expect(welcomeElement).toBeInTheDocument();
    });
});
```

4.  **Run your tests**:

    Add a test script to `package.json`:

```shell
"scripts": {
  "test": "vitest"
}
```

**Run your tests.**

```shell
npm run test
```

