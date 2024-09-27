import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },
  e2e: {
    baseUrl: "https://simple-grocery-store-api-testing.glitch.me",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("@cypress/grep/src/plugin")(config)
      return config
    },
  },
});
