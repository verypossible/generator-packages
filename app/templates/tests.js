require('jest-enzyme');
require('jest-styled-components');
require('whatwg-fetch');

const { stepsToBeEqual } = require('gen-tester');

console.warn = jest.fn();

expect.extend({
  stepsToBeEqual,
});
