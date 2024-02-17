import { reactive, html } from "https://esm.sh/@arrow-js/core";

import { todoInput } from "./todo-input.js";
import { todoList } from "./todo-list.js";
// import { TodoList } from "./todo-list.js";
// import { ToggleButton } from "./toggle-button.js";
import { toolbar } from "./toolbar.js";

// export class App {
//   constructor(root) {
//     const updateAll = () => {
//       this.update();
//     };

//     const store = reactive({
//       items: [],
//       currentFilter: "all",
//     });
//     store.$on("items", updateAll);
//     store.$on("currentFilter", updateAll);

//     this.todoInput = new TodoInput(root, store, updateAll);
//     this.todoList = new TodoList(root, store, updateAll);
//     this.toolbar = new Toolbar(root, store, updateAll);
//     this.toggleButton = new ToggleButton(root, store, updateAll);
//   }
//   update() {
//     this.todoInput.update();
//     this.toolbar.update();
//     this.toggleButton.update();
//     this.todoList.update();
//   }
// }

// export class ToggleButton {
//   constructor(root, store, updateAll) {
//     this.store = store;
//     this.toggleButton = root.querySelector(".check-all");

//     this.toggleButton.addEventListener("click", () => {
//       if (this.store.items.some((storeItem) => !storeItem.isCompleted)) {
//         for (const item of this.store.items) {
//           item.isCompleted = true;
//         }
//       } else {
//         for (const item of this.store.items) {
//           item.isCompleted = false;
//         }
//       }
//       updateAll();
//     });
//   }
//   update() {
//     if (this.store.items.length === 0) {
//       this.toggleButton.classList.add("check-all--initial");
//       this.toggleButton.classList.remove("check-all--off");
//       this.toggleButton.classList.remove("check-all--on");
//     } else {
//       if (this.store.items.some((item) => !item.isCompleted)) {
//         this.toggleButton.classList.remove("check-all--initial");
//         this.toggleButton.classList.add("check-all--off");
//         this.toggleButton.classList.remove("check-all--on");
//       } else {
//         this.toggleButton.classList.remove("check-all--initial");
//         this.toggleButton.classList.remove("check-all--off");
//         this.toggleButton.classList.add("check-all--on");
//       }
//     }
//   }
// }

export const app = html` <div class="main">
  <div class="todo">
    <button class="check-all check-all--initial">❯</button>
    ${todoInput}
  </div>
  ${todoList} ${toolbar}
</div>`;
