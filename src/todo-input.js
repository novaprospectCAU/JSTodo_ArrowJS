import { reactive, html } from "https://esm.sh/@arrow-js/core";
import { getNewId, store } from "./store.js";

export const todoInput = html` <input
  class="todo-input"
  type="text"
  placeholder="What needs to be done?"
  autofocus
  @keydown="${(e) => {
    //1
    if (e.key === "Enter" && !e.isComposing) {
      const string = e.target.value.trim();
      if (string) {
        //2
        const newItem = {
          id: getNewId(),
          text: string,
          isCompleted: false,
        };
        store.items.unshift(newItem);
        e.target.value = "";
      }
    }
  }}"
/>`;
