const { defineConfig } = require("cypress");

module.exports = {
  projectId: "et7a9y",
  // The rest of the Cypress config options go here...
};

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


require('@applitools/eyes-cypress')(module);
