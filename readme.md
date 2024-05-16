# Comparaison React Router / Tanstack Router avec Relay

## Installation

Bun is required to launch the project :

```bash
$ curl -fsSL https://bun.sh/install | bash
```

Install dependencies and launch back-end (Bun + Yoga GraphQL) :

```bash
$ cd back
$ bun install # install dependencies
$ bun run src/scripts/printSchema.ts # generate GQL Schema
$ bun --hot run ./src/index.ts # run server
```

Install dependencies and launch front-end (front-react-router or front-tanstack) :

```bash
$ cd front-react-router # or `cd front-tanstack`
$ bun install # install dependencies
$ bun relay # generate types for Relay
$ bun dev # launch dev server
```
