import { reactive, html } from "https://esm.sh/@arrow-js/core";

import { TodoInput } from "./todo-input.js";
import { TodoList } from "./todo-list.js";
import { ToggleButton } from "./toggle-button.js";
import { Toolbar } from "./toolbar.js";

export class App {
  constructor(root) {
    const updateAll = () => {
      this.update();
    };

    const store = reactive({
      items: [],
      currentFilter: "all",
    });
    store.$on("items", updateAll);
    store.$on("currentFilter", updateAll);

    this.todoInput = new TodoInput(root, store, updateAll);
    this.todoList = new TodoList(root, store, updateAll);
    this.toolbar = new Toolbar(root, store, updateAll);
    this.toggleButton = new ToggleButton(root, store, updateAll);
  }
  update() {
    this.todoInput.update();
    this.toolbar.update();
    this.toggleButton.update();
    this.todoList.update();
  }
}
