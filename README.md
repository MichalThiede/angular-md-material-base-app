# Major changes to configure new app

- delete package-lock.json file
- open angular.json file and change "angular-base-app" in every place to your app name
- open package.json file and change "angular-base-app" in every place to your app name
- to install dependencies run:

```bash
npm i
```

- to initialize husky & commit convention run:

```bash
npm run prepare
```

<br />

# Conventional Commits

All commits must follow the Conventional Commits standard.

```bash
<type>(<scope - optional>): <short description>
```

### Common types:

- feat – new feature
- fix – bug fix
- refactor – code change without behavior change
- chore – tooling / config
- docs – documentation
- test – tests
- style – formatting (no logic change)

### Rules:

- use lowercase for the description
- use present tense

### Examples:

```bash
feat(auth): add login validation
fix(api): handle null response
chore: update eslint config
```

<br />

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.
