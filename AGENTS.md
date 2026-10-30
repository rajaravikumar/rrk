# AGENTS

This repository is a React portfolio web app created with Create React App.

## Primary workflow
- Use `yarn install` to install dependencies.
- Use `yarn start` to run the development server.
- Use `yarn build` to create a production build.
- Use `yarn test` to run tests.

## Project structure
- `package.json` contains the scripts and dependencies.
- `src/` is the only application source directory.
- `src/components/` contains UI components and page sections.
- `public/` contains the HTML shell, manifest, and static assets.
- `build/` is the output of the production build and should not be edited directly.

## Agent guidance
- Focus changes in `src/` and `public/`, not in `build/` or `node_modules/`.
- This repo is frontend-only; there is no backend server code here.
- Styling is handled with CSS files under `src/` and component-specific styles.
- The app uses React Router v5 (`react-router-dom@5.2.0`) and React 19.
- Keep any command-line work limited to the npm/yarn scripts defined in `package.json`.

## Useful notes
- The README contains basic setup instructions and local development commands.
- Do not add new dependency versions incompatible with Create React App 5.
