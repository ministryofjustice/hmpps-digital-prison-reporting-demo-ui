const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true,
  videosFolder: 'cypress-tests/acceptance-tests/videos',
  screenshotsFolder: 'cypress-tests/acceptance-tests/screenshots',
  e2e: {
    // DEV ingress from helm_deploy/values-dev.yaml
    baseUrl: 'https://hmpps-digital-prison-reporting-demo-ui-dev.hmpps.service.justice.gov.uk',
    specPattern: 'cypress-tests/acceptance-tests/e2e/**/*.acceptance.cy.js',
    supportFile: false,
  },
})
