import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from "react-relay";
import greetingsQuery from "../../relay/queries/greetingsQuery";
import { useEffect } from "react";
import { greetingsQuery as GreetingsQueryType } from "../../relay/queries/__generated__/greetingsQuery.graphql";
import { Outlet } from "react-router-dom";

const HomeQueryLoader = ({
  queryRef,
}: {
  queryRef: PreloadedQuery<GreetingsQueryType>;
}) => {
  const data = usePreloadedQuery<GreetingsQueryType>(greetingsQuery, queryRef);
  return (
    <>
      <div>Bienvenue {data.greetings}</div>
      <Outlet />
    </>
  );
};

const Home = () => {
  const [queryRef, loadQuery] =
    useQueryLoader<GreetingsQueryType>(greetingsQuery);

  useEffect(() => {
    console.log("load query");

    loadQuery({});
  }, [loadQuery]);

  if (queryRef) {
    return <HomeQueryLoader queryRef={queryRef} />;
  }
};

export default Home;
