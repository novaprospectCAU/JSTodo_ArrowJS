import { reactive, html } from "https://esm.sh/@arrow-js/core";

import { todoInput } from "./todo-input.js";
import { todoList } from "./todo-list.js";
import { toolbar } from "./toolbar.js";
import { toggleButton } from "./toggle-button.js";

export const app = html` <div class="main">
  <div class="todo">${toggleButton} ${todoInput}</div>
  ${todoList} ${toolbar}
</div>`;
