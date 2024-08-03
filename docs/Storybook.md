# Storybook

1. **Install Storybook**: First, you need to install the necessary Storybook packages. You can do this using npm or yarn. Run the following command:

```sh
npx sb init
```

This command will detect your project type and install the necessary dependencies for Storybook.

2. **Update Storybook Configuration**: After installing, you need to configure Storybook to work with your Vite setup. Create or update the `.storybook/main.js` file with the following content:

```js
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite',
  },
};
```

3. Install Vite Builder: Since you're using Vite, you need to install the Vite builder for Storybook. Run the following command:

```sh
npm install --save-dev @storybook/builder-vite
```

4. **Add Vite Configuration**: Create a vite.config.js file if you don't have one already, and make sure it exports your Vite configuration. Storybook will use this configuration:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

5. Run Storybook: Now you can start Storybook with the following command:


```
npm run storybook
```