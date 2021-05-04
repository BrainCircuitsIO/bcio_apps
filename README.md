## Collection of connetomics standalone apps

### Getting Started

Copy `config.json.example` to `config.json` and update the auth tokens

Inspect the `README.md` in example-app in `apps/example-app` to get started.

### Creating a new app

If you want to create a new app, copy `example-app` to a new subfolder in `apps`.

You want to update the `siteMetadata` in `gatsby-config.js`, add new libraries with `npm install`.

You can start to modify the code/component in `src/pages/index.js` with the required UI and functionality.

You can use the imported JSON variables from `config.json` in the root folder of the repository to mock authentication tokens.
