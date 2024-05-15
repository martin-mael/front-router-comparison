import { createSchema } from "graphql-yoga";

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      greetings: String
      slowQuery: String
    }
  `,
  resolvers: {
    Query: {
      greetings: () => "Hello from Yoga in a Bun app!",
      slowQuery: async () => {
        await new Promise((resolve) => setTimeout(resolve, 2500));
        return "Slow query resolved!";
      },
    },
  },
});
