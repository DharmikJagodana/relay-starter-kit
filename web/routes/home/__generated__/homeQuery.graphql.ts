/**
 * @generated SignedSource<<e1c876423579492ed0cbd526b2774462>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type homeQuery$variables = {};
export type homeQueryVariables = homeQuery$variables;
export type homeQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"Auth_me">;
  } | null;
};
export type homeQueryResponse = homeQuery$data;
export type homeQuery = {
  variables: homeQueryVariables;
  response: homeQuery$data;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "homeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Auth_me"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "homeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "username",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "emailVerified",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "givenName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "familyName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Picture",
            "kind": "LinkedField",
            "name": "picture",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "url",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "timeZone",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "locale",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "created",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updated",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lastLogin",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7b1c5b8b96074c4059f50622a678edd7",
    "id": null,
    "metadata": {},
    "name": "homeQuery",
    "operationKind": "query",
    "text": "query homeQuery {\n  me {\n    ...Auth_me\n    id\n  }\n}\n\nfragment Auth_me on User {\n  id\n  username\n  email\n  emailVerified\n  name\n  givenName\n  familyName\n  picture {\n    url\n  }\n  timeZone\n  locale\n  created\n  updated\n  lastLogin\n}\n"
  }
};

(node as any).hash = "1085bde0d21af0b68182284bf1c43e79";

export default node;
