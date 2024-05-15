/**
 * @generated SignedSource<<ac4f11691a1df5866ae6fc4fa2afcc12>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type slowQuery$variables = Record<PropertyKey, never>;
export type slowQuery$data = {
  readonly slowQuery: string | null | undefined;
};
export type slowQuery = {
  response: slowQuery$data;
  variables: slowQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "slowQuery",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "slowQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "slowQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "3be476485b7a7947d5abe41f68b3148d",
    "id": null,
    "metadata": {},
    "name": "slowQuery",
    "operationKind": "query",
    "text": "query slowQuery {\n  slowQuery\n}\n"
  }
};
})();

(node as any).hash = "f2665d5b8eb6cd43aeca8003dfbf3918";

export default node;
