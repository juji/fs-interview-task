/** @type {import('ts-jest').JestConfigWithTsJest} */


module.exports = {

  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: [ "js", "ts", "json" ],
  
  clearMocks: true,
  coverageProvider: "v8",
  roots: ["<rootDir>/src"],
  
  testMatch: [
    "**/__test__/**/*.[jt]s",
    "**/?(*.)+(spec|test).[jt]s",
  ],

  transform: {
    "^.+\\.ts$": "ts-jest"
  },

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  }

};