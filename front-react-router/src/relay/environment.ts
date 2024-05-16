import {
  CacheConfig,
  Environment,
  Network,
  QueryResponseCache,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from "relay-runtime";

console.log("new Environment");

const createEnvironment = () => {
  const cache = new QueryResponseCache({ size: 250, ttl: 60000 });

  const fetchQuery = async (
    request: RequestParameters,
    variables: Variables,
    cacheConfig: CacheConfig
  ) => {
    const queryID = request.text;
    const isMutation = request.operationKind === "mutation";
    const isQuery = request.operationKind === "query";
    const forceFetch = cacheConfig && cacheConfig.force;

    if (isQuery && queryID && !forceFetch) {
      console.log("cache.get", queryID, variables);
      const fromCache = cache.get(queryID, variables);
      if (fromCache) {
        return fromCache;
      }
    }

    const requestVariables = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      query: request.text,
      variables,
    });

    const fetchResponse = await fetch("http://localhost:3000/graphql", {
      ...requestVariables,
      body,
    });

    const json = await fetchResponse?.json();

    console.log("put in cache ?", { isQuery, json, queryID });

    if (isQuery && json && queryID) {
      cache.set(queryID, variables, json);
    }

    if (isMutation) {
      cache.clear();
    }

    if (!json.data) {
      json.data = {};
    }

    return json;
  };
  console.log("NOUVEL ENVIRONNEMENT");

  return new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
    log: console.log,
  });
};

export const environment = createEnvironment();
