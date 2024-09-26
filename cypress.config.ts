import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://simple-grocery-store-api-testing.glitch.me",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
