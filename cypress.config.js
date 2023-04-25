const { defineConfig } = require("cypress");

require('dotenv').config({ path: './frontend/.env.local' })

module.exports = defineConfig({
  env: {
    AUTH0_SECRET: process.env.AUTH0_SECRET,
    AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
    AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_SCOPE: process.env.AUTH0_SCOPE,
    AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
    API_PREFIX: process.env.API_PREFIX,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
