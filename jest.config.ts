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
  }
};

export default config;
