import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  verbose: true,
  moduleFileExtensions: ['js', 'ts'],
  collectCoverageFrom: ['src/**/*.ts'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.ts$': '@swc/jest'
  },
  setupFilesAfterEnv: ['./src/utils/clearDatabase.ts']
};

export default config;
