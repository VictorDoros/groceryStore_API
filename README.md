# Grocery Store API
For testing purposes, a simple grocery store has been used, the documentation of which can be found by accessing the [link](https://github.com/vdespa/Postman-Complete-Guide-API-Testing/blob/main/simple-grocery-store-api.md).

This project is exclusively focused on creating the API tests and can be run on 2 different environments: testing and production.

# Prerequisites
* Node.js (v14.x or later)
* npm (v7.x or later)

# Installation
1. Clone the repo locally:
2. Navigate to the project directory and install the npm dependencies:
```
npm install
```

3. Run Cypress using one of the 2 options:
   (while running cypress, the environment type should be mentioned as follows:)
   
- _Open mode:_
```
npx cypress open --env env='testing'
```
OR

```
npx cypress open --env env='prod'
```

- _Headless mode:_
_Open mode:_
```
npx cypress run --env env='testing'
```
OR

```
npx cypress run --env env='prod'
```

# Dependencies used within the project
1. @cypress/grep -  [@cypress/grep documentation](https://www.npmjs.com/package/@cypress/grep)
2. @faker-js/faker - [@faker-js/faker documentation](https://www.npmjs.com/package/@faker-js/faker)
3. cypress-map - [cypress-map documentation](https://github.com/bahmutov/cypress-map)
4. cypress-mochawesome-reporter - [cypress-mochawesome-reporter documentation](https://www.npmjs.com/package/cypress-mochawesome-reporter)
5. cypress-plugin-api - [cypress-plugin-api documentation](https://github.com/filiphric/cypress-plugin-api)
6. cypress-plugin-steps - [cypress-plugin-steps documentation](https://github.com/filiphric/cypress-plugin-steps)
