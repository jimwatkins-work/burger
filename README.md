# My Burger

- [Getting Started](#start)
- [Execute the tests](#execute)

## Getting Started <a name='start'></a>

### `stack`

 - React.js
 - Redux
 - Firebase
 - Enzyme 
 - Jest
 - Webdriver.io
 - Allure

### Prerequisites

- Node.js - v8.x.x or v9.x.x

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### Environment Setup

#### Node.js

If Node.js is not available on your system use [https://nodejs.org/en/download/](https://nodejs.org/en/download/) to download the installer

After running the installer, check whether it was properly installed or not using the following command line:

```shell
node -v
```

If the version of the current Node.js you just installed is printed out, the installation was successful.

#### Dependencies

Clone the `burger` repository.

```shell
git git@github.com:jimwatkins-work/burger.git
```

To install dependencies, run:

```shell
npm install
```

### Tools

- [WebdriverIO](https://webdriver.io/) v.5


#### Directory structure

- [wdio.conf](./wdio.conf.js) keeps the configuration needed for WebdriverIO to run tests base on environment.

- [test/specs](.test/specs) directory contains suites for Smoke, Regression tests and E2E tests.

- [test/pageobjects](./test/pageobjects) makes automation tests more readable and maintainable since it abstracts any actions on the page away from the actual tests. When you need to change, add or remove method navigate to the page you need.

#### Execute the tests<a name='execute'></a>

Run all tests:

```shell
./node_modules/.bin/wdio wdio.conf.js
```

Run one spec:

```shell
./node_modules/.bin/wdio wdio.conf.js --spec ${spec name}
```

