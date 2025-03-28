import { defineConfig } from "cypress";
import reporter from "cypress-mochawesome-reporter/plugin";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "Test Results",
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      reporter(on);
      return config;
    },
    env: {
      BASE_API_URL:
        "https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/",
      BASE_HOST_URL: "http://localhost:3000",
    },
  },
});
