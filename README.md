# Praxis final homework tests

Initial Typescript and Mocha configuration. Uses [ts-node](https://www.npmjs.com/package/ts-node) and [ts-config-paths](https://www.npmjs.com/package/tsconfig-paths) to enable JIT compilation of tests.

## Tests

### API tests

Put your api tests in the `test/api` folder and run them using `npm run test:api`

### UI tests

First, you need to run `docker compose up` to start up the Selenium Grid and browser instances.
Put your UI tests in the `test/ui` folder and run them using `npm run test:ui`

### Notes

- You can create your POM (Page Object Model) in the `src/page` folder to keep them organized.
- You can use VNC Viewer to see what your tests are doing in the browser. Just connect to `localhost:9001` (or 9002 for Firefox - check `docker-compose.yml` ports) and `secret` as the default password.
- Since browsers are running in a separate docker container, you need to access `host.docker.internal` instead of `localhost` in your UI tests.

## Dotenv

If you want to use a `.env` file, you first need to install dotenv `npm install --save-dev dotenv`, then require it in your scripts in your `package.json`:

- `"test:api": "mocha -t 5000 --reporter mochawesome -r tsconfig-paths/register -r ts-node/register/transpile-only -r dotenv/config \"test/api/**/*.test.ts\""`
- For protractor, you need to require it in the launcher array: `require: ['tsconfig-paths/register', 'dotenv/config'],`
