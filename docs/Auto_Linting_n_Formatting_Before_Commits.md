# Auto Linting & Formatting Before Commits

**Auto-linting and formatting before commits** refer to using tools to automatically check and correct your code style and format before the code is committed to your version control system (such as Git). This is typically achieved by using pre-commit hooks.

Here's how you can set up auto-linting and formatting before commits using `husky` and `lint-staged`:

1.  **Install Husky and lint-staged**:

```bash
npm install -D husky lint-staged 
```

2.  **Initialize Husky**:

```bash
npx husky install
```

3.  **Add Husky to your `package.json`**:

```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

4.  **Add a pre-commit hook**:

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

5.  **Configure lint-staged in your `package.json`**:

```json
{
  "lint-staged": {
    "*.js": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

Here’s a step-by-step explanation of the setup:

-   **Husky** is a tool that allows you to easily manage Git hooks. Git hooks are scripts that run automatically on certain Git events like committing, pushing, etc.
-   **lint-staged** runs linters on your staged files, i.e., the files you are about to commit.

By following the steps above, every time you try to commit, Husky will trigger **lint-staged**, which will then run ESLint and Prettier (or any other specified tools) on your staged .js files and automatically fix any linting or formatting issues.

To summarize, while adding prop-types to your React component ensures that your component props are correctly validated, setting up Husky and lint-staged will help you automatically lint and format your code before committing it.

