module.exports = {
  preset: 'jest-preset-angular',
  globalSetup: 'jest-preset-angular/global-setup',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/projects/widget-test/tsconfig.spec.json',
    },
  },
};
