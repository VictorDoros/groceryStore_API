import { defineConfig } from "cypress"

export default defineConfig({
  retries: {
    runMode: 2,
    openMode: 0,
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    inlineAssets: true,
    saveAllAttempts: false,
  },
  env: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },
  e2e: {
    //baseUrl: "https://simple-grocery-store-api-testing.glitch.me",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on)
      require("@cypress/grep/src/plugin")(config)
      return config
    },
  },
})
