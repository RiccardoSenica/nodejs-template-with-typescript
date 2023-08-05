# This is a template for a Node project with TypeScript

It contains basic configurations for the following:

- TypeScript (typechecking and building)
- Eslint (linting)
- Prettier (formatting)
- Jest/Supertest (testing)
- Husky (pre-commit hooks to run linting, typechecking, and commit message format)
- Winston (logging)
- GitHub Actions (CI/CD)

# Environment Variables

Need to export the following environment variables:

- PORT - The port to run the server on (defaults to 3000)
- DATABASE_URL - The URL to the database, formatted as `postgres://<username>:<password>@<host>:<port>/<database>`

## Commands

Install dependencies:

`yarn`

Generate Prisma client:

`yarn db:generate`

Run the migrations:

`yarn db:migrate`

Reset the database:

`yarn db:reset`

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

To run it using Docker, running the server on port 3000:

`docker-compose up --build`
