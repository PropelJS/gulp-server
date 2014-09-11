gulp-server
===========

Gulp Integration for API Servers

Gulp Tasks
----------
  - help - displays the list of commands available
  - dev - runs the development workflow
    - lint files on change
    - run unit tests on change
    - runs the api endpoint tests on change
  - build - runs the full build workflow
    - lints files
    - runs unit tests
    - runs the api endpoint tests
    - runs code coverage report
    - runs the api benchmarks
    - runs the api load tests
    - runs complexity reports
    - runs cost analysis
    - generates changelog
    - generates todos
    - generates contributors file
    - generates docs
    - generates api-explorer
  - lint - lints the source files
  - test - runs the unit tests, api endpoint tests, and code coverage
  - comp - runs the complexity reports and cost analysis
  - load - runs the api load tests
  - bench - runs the api benchmark tests
  - explorer - generates the api explorer
  - docs - generates the api docs

api-endpoint-tests - supertest - tests
api-benchmark-tests - unknown so far - tests or build only?
api-load-tests - loadtest - tests or build only?
api-explorer-generation - swagger - build
