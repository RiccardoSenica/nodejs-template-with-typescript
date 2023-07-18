# This is a template for a Node project with TypeScript

It contains basic configurations for the following:

- TypeScript (typechecking and building)
- Eslint (linting)
- Prettier (formatting)
- Jest (testing)
- Husky (pre-commit hooks to run linting, typechecking, and commit message format)
- GitHub Actions (CI/CD)

## Possible future changes

- Enforcing commit messages format
- Switching bundler to ESBuild, SWC, or Babel
- Deployment to AWS Lambda or Google Cloud Functions

## Commands

Install dependencies:

`yarn`

Audit:

`yarn audit`

Lint:

`yarn lint`

Typecheck:

`yarn typecheck`

Format:

`yarn format`

Husky hooks:

`yarn prepare`

Test:

`yarn test`

Run in development mode:

`yarn dev`

Build:

`yarn build`

Run:

`node build/index.js`

To commit a WIP skipping checks:

`git commit -m "WIP: <message>" --no-verify`
