/**
 * @generated SignedSource<<2e1a9609a2e991fa7a97e87919549a16>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type productsFragment$data = {
  readonly _id: string | null;
  readonly createdAt: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly price: number | null;
  readonly type: string | null;
  readonly file_path: string | null;
  readonly img_path: string | null;
  readonly " $fragmentType": "productsFragment";
};
export type productsFragment$key = {
  readonly " $data"?: productsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"productsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "productsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "_id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
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
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "img_path",
      "storageKey": null
    }
  ],
  "type": "Product",
  "abstractKey": null
};

(node as any).hash = "3cca7ec9fbe0eb5b21abb150234730bf";

export default node;
