# Skeleton AngularJs

It's principal objective is to provide an skeleton or point of start for future projects.

### Contains
- [x] Angular v1.4.x
- [x] UI-Router v1.0
- [x] Babel v6.3.x
- [x] Webpack v1.12.x
- [x] ESLint v1.10.x
- [x] Protractor v3.0.x
- [x] Mocha v2.3.x
- [x] Chai v3.4.x

### Setup
```
npm install
```
### Run the Application
We have preconfigured the project with a simple development web server. The simplest way to start this server is:
```
npm start
```

## Testing
There are two kinds of tests in this skeleton: Unit tests and End to End(e2e) tests.

### Unit tests testing
This skeleton comes preconfigured with unit tests. These are written in [Jasmine](http://jasmine.github.io/), which we run with the [Karma Test Runner](https://karma-runner.github.io/0.13/index.html). We provide a Karma configuration file to run them.
- the configuration is found at [karma.conf.js](karma.conf.js)
- the unit tests are found inside of the components folder they are testings in a folder called `__test__`

The easiest way to run the unit tests is to use the supplied npm script:
```
npm test
```

### End to end testing
This skeleton comes with end-to-end tests, again written in [Jasmine](http://jasmine.github.io/). These tests are run with the [Protractor](https://angular.github.io/protractor/#/) End-to-End test runner. It uses native events and has special features for Angular applications.

- the configuration is found at [protractor-conf.js](protractor.conf.js)
- the end-to-end tests are found in the [e2e](e2e) folder

Protractor simulates interaction with our web app and verifies that the application responds correctly. Therefore, our web server needs to be serving up the application, so that Protractor can interact with it.

Once you have ensured that the development web server hosting our application is up and running you can run the end-to-end tests using the supplied npm script:
```
npm run test-e2e
```
This script will execute the end-to-end tests against the application being hosted on the development server.


## Continuous Integration

### Travis CI
Travis CI is a continuous integration service, which can monitor GitHub for new commits to your repository and execute scripts such as building the app or running tests. The angular-seed project contains a Travis configuration file, .travis.yml, which will cause Travis to run your tests when you push to GitHub.
