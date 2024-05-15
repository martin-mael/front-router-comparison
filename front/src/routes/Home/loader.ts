import { fetchQuery } from "react-relay";
import { greetingsQuery as GreetingsQueryType } from "../../relay/queries/__generated__/greetingsQuery.graphql";
import { environment } from "../../relay/environment";
import greetingsQuery from "../../relay/queries/greetingsQuery";

export const homeLoader = async () => {
  const greetings = await fetchQuery<GreetingsQueryType>(
    environment,
    greetingsQuery,
    {}
  ).toPromise();
  console.log("greetings", greetings);

  return { greetings };
};
