import { reactive, html } from "https://esm.sh/@arrow-js/core";
import { store } from "./store.js";

export class App {
  constructor(root) {
    this.store = reactive({
      item: [],
      currentFilter: "all",
    });
  }
  updateAll() {
    this.update();
  }
  update() {}
}

const app = new App("H");
