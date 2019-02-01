module.exports = {
  testEnvironment: 'enzyme',
  setupFilesAfterEnv: ['./tests.js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '<%= namespace %>/(.*)': '<rootDir>/packages/$1',
  },
  globals: {
    'ts-jest': {
      babelConfig: false,
    },
  },
};
