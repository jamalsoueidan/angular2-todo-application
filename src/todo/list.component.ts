import { Component, Input, Output, EventEmitter } from "angular2/core"
import { TodoItem } from "./item.component";
import { ITodo } from "./service";

@Component({
  selector: 'TodoList',
  template: `
    <style>
      ul {
        padding: 20px 0;
        margin: 0;
      }
    </style>
    <ul>
      <TodoItem *ngFor="#todo of todos"
        [todo]="todo"
        (removeTodo)="removeTodo.emit($event)"
        (toggleTodo)="toggleTodo.emit($event)"
        ></TodoItem>
    </ul>
  `,
  directives: [TodoItem]
})
export class TodoList {
  @Input() todos:ITodo[];
  @Output() removeTodo:EventEmitter<any> = new EventEmitter();
  @Output() toggleTodo:EventEmitter<any> = new EventEmitter();
}
