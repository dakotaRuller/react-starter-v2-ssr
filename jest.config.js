module.exports = {
  collectCoverageFrom: ['src/**/*.js', 'src/*.js', '!src/index.js'],
  coverageReporters: ['text'],
  moduleFileExtensions: ['js', 'jsx', 'svg'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^@/src(.*)$': '<rootDir>/src/$1',
    '^@/components(.*)$': '<rootDir>/src/components/$1',
    '^@/styled-components(.*)$': '<rootDir>/src/styled-components/$1',
    '^@/contexts(.*)$': '<rootDir>/src/contexts/$1',
    '^@/mocks(.*)$': '<rootDir>/__mocks__/$1',
  },
  modulePaths: [
    '<rootDir>/src/',
    '<rootDir>/styles',
    '<rootDir>/public',
    '<rootDir>/pages',
  ],
  setupFiles: ['<rootDir>/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.[t|j]s?$': 'babel-jest',
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
};
