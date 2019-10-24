# Instructions (Development Mode Only)

## Installation

- `npm install` in the root of the project for the back-end
- `cd` into client and `npm install` for the front-end

## Running the app

- `node server.js` in the root of the project to start the server.
- `cd` into client and `npm start` to boot up the front-end.

## Testing

- `cd` into client and `npm test` to run the tests.

### Test Coverage

- `npm test -- --coverage`
  .._ `npm test -- --coverage --watchAll=false` in case the test coverage comes up empty.
  .._ The flag `--watchALl=false` is required due to some potential issues with jest. [More on that here](https://github.com/facebook/create-react-app/issues/6888)

## Notes

- You can use one of the accounts from the mock database
- You can also make another account but there is no real database attached, therefore the data is not persistent and created accounts will vanish after the back-end server is stopped.
