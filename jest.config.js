module.exports = {
  preset: 'jest-preset-angular',
  globalSetup: 'jest-preset-angular/global-setup',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/projects/olvyhq/widget-angular/tsconfig.spec.json',
    },
  },
};
