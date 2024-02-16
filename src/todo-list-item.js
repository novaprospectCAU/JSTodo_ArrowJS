import { html } from "https://esm.sh/@arrow-js/core";

export class TodoListItem {
  constructor(list, store, item, updateAll) {
    this.list = list;
    this.store = store;
    this.item = item;
    this.updateAll = updateAll;

    this.element = this.init();

    this.listItemText = this.element.querySelector(".todo-list__item-text");
    this.listItemCheckButton = this.element.querySelector(
      ".todo-list__item-check-button"
    );
    this.update(this.item);
  }
  update(item) {
    this.item = item;
    this.listItemText.textContent = this.item.text;
    if (this.item.isCompleted) {
      this.listItemText.classList.add("todo-list__item-checked");
      this.listItemCheckButton.textContent = "✔️";
    } else {
      this.listItemText.classList.remove("todo-list__item-checked");
      this.listItemCheckButton.textContent = "";
    }

    if (this.store.currentFilter === "all") {
      this.element.classList.remove("todo-list__item--hiding");
    } else if (this.store.currentFilter === "active") {
      this.element.classList.toggle(
        "todo-list__item--hiding",
        this.item.isCompleted
      );
    } else {
      this.element.classList.toggle(
        "todo-list__item--hiding",
        !this.item.isCompleted
      );
    }
  }
  remove() {
    this.element.remove();
  }
  /**
   * 리스트 아이템을 만드는 함수(생성자에서만 사용)
   */
  init() {
    const newListItem = document.createElement("li");
    newListItem.classList.add("todo-list__item");

    const initTemplate = html` <div class="todo-list__item-left">
        <button class="todo-list__item-check-button"></button>
        <div class="todo-list__item-text">${this.item.text}</div>
        <input class="todo-list__item-input todo-list--switch" type="text" />
      </div>
      <button class="todo-list__delete-button">X</button>`;

    initTemplate(newListItem);

    //삭제 버튼 이벤트 리스너
    newListItem
      .querySelector(".todo-list__delete-button")
      .addEventListener("click", () => {
        this.store.items = this.store.items.filter(
          (currentItem) => currentItem !== this.item
        );
      });
    //체크 버튼 이벤트 리스너
    newListItem
      .querySelector(".todo-list__item-check-button")
      .addEventListener("click", () => {
        this.item.isCompleted = !this.item.isCompleted;
        this.updateAll();
      });

    this.list.append(newListItem);
    return newListItem;
  }
}
