import { Await, createFileRoute, defer } from "@tanstack/react-router";
import { fetchQuery } from "react-relay";
import greetingsQuery from "../relay/queries/greetingsQuery";
import { greetingsQuery as GreetingsQueryType } from "../relay/queries/__generated__/greetingsQuery.graphql";
import slowQuery from "../relay/queries/slowQuery";
import { slowQuery as SlowQueryType } from "../relay/queries/__generated__/slowQuery.graphql";
import { Suspense } from "react";

export const Route = createFileRoute("/")({
  loader: async ({ context }) => {
    const { relayEnvironment } = context;
    const greetings = await fetchQuery<GreetingsQueryType>(
      relayEnvironment,
      greetingsQuery,
      {},
      { fetchPolicy: "store-or-network" }
    ).toPromise();
    const slowData = fetchQuery<SlowQueryType>(
      relayEnvironment,
      slowQuery,
      {},
      { fetchPolicy: "store-or-network" }
    ).toPromise();
    return { greetings, slowData: defer(slowData) };
  },
  component: Index,
});

function Index() {
  const { greetings, slowData } = Route.useLoaderData();
  return (
    <div className="p-2">
      <h2>{greetings?.greetings}!</h2>
      <Suspense fallback="Loading slow data...">
        <Await promise={slowData}>
          {(data) => {
            return <h3>{data?.slowQuery}!</h3>;
          }}
        </Await>
      </Suspense>
    </div>
  );
}
