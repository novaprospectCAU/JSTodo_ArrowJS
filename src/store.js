import { reactive } from "https://esm.sh/@arrow-js/core";

export const store = reactive({
  items: [],
  /** all, active, completed */
  currentFilter: "all",
});

export let lastUsedId = 0;

export function getNewId() {
  return lastUsedId++;
}
