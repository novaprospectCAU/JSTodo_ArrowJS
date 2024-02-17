import { reactive, html } from "https://esm.sh/@arrow-js/core";

import { store } from "./store.js";

function makeToggleStatus() {
  const storeItemsLength = store.items.length;
  if (storeItemsLength) {
    for (const item of store.items) {
      if (!item.isCompleted) {
        return "check-all--off";
      }
    }
    return "check-all--on";
  } else {
    return "check-all--initial";
  }
}

export const toggleButton = html`
  <button
    class="${() => `check-all ${makeToggleStatus()}`}"
    @click="${() => {
      if (store.items.some((item) => !item.isCompleted)) {
        for (let item of store.items) {
          item.isCompleted = true;
        }
      } else {
        for (let item of store.items) {
          item.isCompleted = false;
        }
      }
    }}"
  >
    ❯
  </button>
`;
