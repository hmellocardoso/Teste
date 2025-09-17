//const { defineConfig } = require("cypress");
//const cucumber = require("cypress-cucumber-preprocessor").default;
//module.exports = defineConfig({
//  e2e: {
//    specPattern: "**/*.feature",
//    setupNodeEvents(on, config) {
//      on("file:preprocessor", cucumber());
//    },
//  },
//});

const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

// >>> use sempre "/" no Windows ou "\\" escapado
const RESULTS_DIR = "C:/QA/artifacts/allure-results";
const VIDEOS_DIR  = "C:/QA/artifacts/videos";
const SHOTS_DIR   = "C:/QA/artifacts/screenshots";

module.exports = defineConfig({
  // artefatos do Cypress (fora do projeto)
  videosFolder: VIDEOS_DIR,
  screenshotsFolder: SHOTS_DIR,
  allureResultsPath: RESULTS_DIR,
  // 👇 defina o ENV no NÍVEL RAIZ (não apenas dentro de e2e)
  env: {
    allure: true
  },

  e2e: {
    specPattern: "**/*.feature",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      // seu preprocessor
      on("file:preprocessor", cucumber());

      // o writer LÊ config.env aqui -> por isso é crucial env estar definido ANTES
      allureWriter(on, config);

      return config; // não esqueça de retornar
    },
    video: true,
  },
});


