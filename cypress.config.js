const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  e2e: {
    baseUrl: 'http://127.0.0.1:3007',
    specPattern: 'cypress-tests/integration-tests/e2e/**/*.cy.js',
    supportFile: false,
  },
})
