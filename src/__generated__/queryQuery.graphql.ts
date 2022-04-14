/**
 * @generated SignedSource<<e2fb2cc60289233dd690e527502cee91>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type queryQuery$variables = {
  pFirst: number;
};
export type queryQuery$data = {
  readonly products: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"productsFragment">;
      } | null;
      readonly cursor: {
        readonly _id: string | null;
        readonly createdAt: string | null;
      } | null;
    } | null> | null;
    readonly pageInfo: {
      readonly hasNextPage: boolean | null;
      readonly hasPreviousPage: boolean | null;
      readonly startCursor: {
        readonly _id: string | null;
        readonly createdAt: string | null;
      } | null;
      readonly endCursor: {
        readonly _id: string | null;
        readonly createdAt: string | null;
      } | null;
    };
  } | null;
  readonly users: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly _id: string | null;
        readonly img_path: string | null;
        readonly cart: ReadonlyArray<string | null> | null;
        readonly items: ReadonlyArray<string | null> | null;
        readonly points: number | null;
        readonly username: string | null;
        readonly name: string | null;
        readonly lastname: string | null;
        readonly email: string | null;
        readonly password: string | null;
        readonly description: string | null;
        readonly createdAt: string | null;
      } | null;
      readonly cursor: {
        readonly _id: string | null;
        readonly createdAt: string | null;
      } | null;
    } | null> | null;
    readonly pageInfo: {
      readonly hasNextPage: boolean | null;
      readonly hasPreviousPage: boolean | null;
      readonly startCursor: {
        readonly _id: string | null;
        readonly createdAt: string | null;
      } | null;
      readonly endCursor: {
        readonly _id: string | null;
        readonly createdAt: string | null;
      } | null;
    };
  } | null;
};
export type queryQuery = {
  variables: queryQuery$variables;
  response: queryQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "pFirst"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "pFirst",
    "variableName": "pFirst"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v4 = [
  (v2/*: any*/),
  (v3/*: any*/)
],
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "Cursor",
  "kind": "LinkedField",
  "name": "cursor",
  "plural": false,
  "selections": (v4/*: any*/),
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasNextPage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasPreviousPage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Cursor",
      "kind": "LinkedField",
      "name": "startCursor",
      "plural": false,
      "selections": (v4/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Cursor",
      "kind": "LinkedField",
      "name": "endCursor",
      "plural": false,
      "selections": (v4/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "img_path",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": (v1/*: any*/),
  "concreteType": "UserConnection",
  "kind": "LinkedField",
  "name": "users",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "UserEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            (v7/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cart",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "items",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "points",
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
              "name": "name",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "lastname",
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
              "name": "password",
              "storageKey": null
            },
            (v8/*: any*/),
            (v3/*: any*/)
          ],
          "storageKey": null
        },
        (v5/*: any*/)
      ],
      "storageKey": null
    },
    (v6/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "queryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ProductConnection",
        "kind": "LinkedField",
        "name": "products",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ProductEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Product",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "productsFragment"
                  }
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      },
      (v9/*: any*/)
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "queryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ProductConnection",
        "kind": "LinkedField",
        "name": "products",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ProductEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Product",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "price",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "type",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "file_path",
                    "storageKey": null
                  },
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      },
      (v9/*: any*/)
    ]
  },
  "params": {
    "cacheID": "311948fe7c58b8358dfe4557f920775d",
    "id": null,
    "metadata": {},
    "name": "queryQuery",
    "operationKind": "query",
    "text": "query queryQuery(\n  $pFirst: Int!\n) {\n  products(pFirst: $pFirst) {\n    edges {\n      node {\n        ...productsFragment\n      }\n      cursor {\n        _id\n        createdAt\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor {\n        _id\n        createdAt\n      }\n      endCursor {\n        _id\n        createdAt\n      }\n    }\n  }\n  users(pFirst: $pFirst) {\n    edges {\n      node {\n        _id\n        img_path\n        cart\n        items\n        points\n        username\n        name\n        lastname\n        email\n        password\n        description\n        createdAt\n      }\n      cursor {\n        _id\n        createdAt\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor {\n        _id\n        createdAt\n      }\n      endCursor {\n        _id\n        createdAt\n      }\n    }\n  }\n}\n\nfragment productsFragment on Product {\n  _id\n  createdAt\n  title\n  description\n  price\n  type\n  file_path\n  img_path\n}\n"
  }
};
})();

(node as any).hash = "f057bdbb914ec74f1a335d88ab60ce56";

export default node;
