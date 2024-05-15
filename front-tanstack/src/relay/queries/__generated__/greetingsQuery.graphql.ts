/**
 * @generated SignedSource<<8dbfc893e403f157552b42f629245430>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type greetingsQuery$variables = Record<PropertyKey, never>;
export type greetingsQuery$data = {
  readonly greetings: string | null | undefined;
};
export type greetingsQuery = {
  response: greetingsQuery$data;
  variables: greetingsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "greetings",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "greetingsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "greetingsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "2abe1432ad8b4847d1a488d5a5c9f9ad",
    "id": null,
    "metadata": {},
    "name": "greetingsQuery",
    "operationKind": "query",
    "text": "query greetingsQuery {\n  greetings\n}\n"
  }
};
})();

(node as any).hash = "7b0c1e1b1d871083a969e9ef6d2b12cf";

export default node;
