module.exports = {
  mutate: [
    'fizzbuzz.js'
  ],
  reporters: ['html', 'clear-text'],
  testRunner: 'jest',
  jest: {
      enableFindRelatedTests: false,
  },
  coverageAnalysis: 'all'
}