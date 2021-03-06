module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['!**/node_modules/**', '**/src/**', '!**/database/**'],
  coverageDirectory: '__tests__/coverage',
  globalSetup: './__tests__/before-all-tests.ts',
  preset: 'ts-jest',
  rootDir: undefined,
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.*'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  }
};
