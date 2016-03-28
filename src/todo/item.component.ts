import { Component, Input, Output, EventEmitter } from "angular2/core"
import { ITodo } from "./service";

@Component({
  selector: 'TodoItem',
  template: `
    <style>
      .completed {
        text-decoration: line-through;
      }
      li {
        list-style-type: none;
      }
    </style>
    <li [class.completed]="todo.completed">
      <input type="checkbox" [ngModel]="todo.completed" (click)="toggleTodo.emit(todo)" />
      {{todo.title}}
      <button (click)="removeTodo.emit(todo)">Slet</button>
    </li>
  `
})
export class TodoItem {
  @Input() todo:ITodo;
  @Output() removeTodo:EventEmitter<any> = new EventEmitter();
  @Output() toggleTodo:EventEmitter<any> = new EventEmitter();
}
