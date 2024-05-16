import { Link, createFileRoute } from "@tanstack/react-router";
import { loadQuery, usePreloadedQuery } from "react-relay";
import greetingsQuery from "../relay/queries/greetingsQuery";
import { greetingsQuery as GreetingsQueryType } from "../relay/queries/__generated__/greetingsQuery.graphql";

export const Route = createFileRoute("/about")({
  loader: async ({ context }) => {
    const { relayEnvironment } = context;
    const preloadedQuery = loadQuery<GreetingsQueryType>(
      relayEnvironment,
      greetingsQuery,
      {},
      { fetchPolicy: "store-or-network" }
    );
    return { preloadedQuery };
  },
  component: About,
});

function About() {
  const { preloadedQuery } = Route.useLoaderData();
  const data = usePreloadedQuery(greetingsQuery, preloadedQuery);
  console.log("data", data);
  return (
    <h2>
      {data.greetings}!<Link to="/about">About</Link>
    </h2>
  );
}
