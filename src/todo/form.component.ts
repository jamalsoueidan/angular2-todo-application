import { Component, Output, EventEmitter } from "angular2/core"

@Component({
  selector: 'TodoForm',
  template: `
  <form>
    <input type="text" (keyup.enter)="onEnter(item)" #item autofocus>
  </form>
  `
})
export class TodoForm {
  @Output() addTodo:EventEmitter<any> = new EventEmitter();

  onEnter(item) {
    this.addTodo.emit(item.value);
    item.value = "";
  }
}
