import { createFileRoute } from "@tanstack/react-router";
import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from "react-relay";
import greetingsQuery from "../relay/queries/greetingsQuery";
import { greetingsQuery as GreetingsQueryType } from "../relay/queries/__generated__/greetingsQuery.graphql";
import slowQuery from "../relay/queries/slowQuery";
import { slowQuery as SlowQueryType } from "../relay/queries/__generated__/slowQuery.graphql";
import { Suspense, useEffect } from "react";

export const Route = createFileRoute("/index-with-query-loader")({
  component: Index,
});

function Index() {
  const [greetingsQueryRef, loadGreetings] =
    useQueryLoader<GreetingsQueryType>(greetingsQuery);
  const [slowDataQueryRef, loadSlowData] =
    useQueryLoader<SlowQueryType>(slowQuery);

  useEffect(() => {
    loadGreetings({});
  }, [loadGreetings]);

  useEffect(() => {
    loadSlowData({});
  }, [loadSlowData]);

  return (
    <div className="p-2">
      <Suspense>
        {greetingsQueryRef && <Greetings queryRef={greetingsQueryRef} />}
      </Suspense>
      <Suspense fallback="Loading slow data...">
        {slowDataQueryRef && <SlowData queryRef={slowDataQueryRef} />}
      </Suspense>
    </div>
  );
}

function Greetings({
  queryRef,
}: {
  queryRef: PreloadedQuery<GreetingsQueryType>;
}) {
  const data = usePreloadedQuery(greetingsQuery, queryRef);
  return <h2>{data.greetings}!</h2>;
}

function SlowData({ queryRef }: { queryRef: PreloadedQuery<SlowQueryType> }) {
  const data = usePreloadedQuery(slowQuery, queryRef);
  return <h3>{data.slowQuery}!</h3>;
}
