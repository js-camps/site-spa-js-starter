# The Prettier's configuration

To customize Prettier's configuration

1.  Create the `.prettierrc` File:

    In the root of your Vite React project, create a new file named `.prettierrc`.

2. Add Your Configuration:

    Open the `.prettierrc` file and add your desired Prettier configuration. For example:
    ```json
    {
    "trailingComma": "es5",
    "semi": true,
    "singleQuote": true,
    "arrowParens": "avoid"
    }
    ```
3. Install Prettier:

    If Prettier is not already installed in your project, you can add it using npm or yarn:
    ```bash
    npm install --save-dev prettier
    ```
4. Add a Script to `package.json`:
    ```json
   "scripts": {
    "format": "prettier --write ."
    }
    ```
5. Run Prettier:
    ```bash
    npm run format
    ```

