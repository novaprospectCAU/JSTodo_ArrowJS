import { reactive, html } from "https://esm.sh/@arrow-js/core";
import { store } from "./store.js";

export const toolbar = html` <div
  class="${() =>
    `todo-list__menu ${
      store.items.length === 0 ? "todo-list__menu--hiding" : ""
    }`}"
>
  <div class="menu__count">
    ${() => {
      const itemCount = store.items.filter((item) => !item.isCompleted).length;
      return itemCount === 1 ? "1 item left" : `${itemCount} items left`;
    }}
  </div>
  <div class="menu__control">
    <button
      class="${() =>
        `control-all ${
          store.currentFilter === "all" ? "" : "control-button--inactive"
        }`}"
      @click="${() => (store.currentFilter = "all")}"
    >
      All
    </button>
    <button
      class="${() =>
        `control-active ${
          store.currentFilter === "active" ? "" : "control-button--inactive"
        }`}"
      @click="${() => (store.currentFilter = "active")}"
    >
      Active
    </button>
    <button
      class="${() =>
        `control-completed ${
          store.currentFilter === "completed" ? "" : "control-button--inactive"
        }`}"
      @click="${() => (store.currentFilter = "completed")}"
    >
      Completed
    </button>
  </div>
  <button
    class="${() =>
      `menu-clear ${
        store.items.filter((item) => item.isCompleted).length === 0
          ? "menu-clear--hiding"
          : ""
      }`}"
    @click="${() => {
      store.items = store.items.filter((item) => !item.isCompleted);
    }}"
  >
    Clear completed
  </button>
</div>`;
