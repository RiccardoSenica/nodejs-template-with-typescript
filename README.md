# This is a template for a Node project with TypeScript

It contains basic configurations for the following:

- TypeScript (typechecking and building)
- Eslint (linting)
- Prettier (formatting)
- Jest/Supertest (testing)
- Husky (pre-commit hooks to run linting, typechecking, and commit message format)
- GitHub Actions (CI/CD)

# Environment Variables

- PORT - The port to run the server on
- `DATABASE_URL` - The URL to the database, formatted as `postgres://<username>:<password>@<host>:<port>/<database>`

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
