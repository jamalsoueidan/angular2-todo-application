import { Component, OnInit } from "angular2/core"
import { TodoForm } from "./todo/form.component";
import { TodoList } from "./todo/list.component";
import { TodoService, ITodo } from "./todo/service";

@Component({
  selector: 'application',
  template: `
    <h1>Todo - App</h1>
    <TodoForm (addTodo)="addTodo($event)"></TodoForm>
    <TodoList [todos]="todos" (removeTodo)="removeTodo($event)" (toggleTodo)="toggleTodo($event)"></TodoList>
  `,
  directives: [TodoForm, TodoList],
  providers: [TodoService]
})
export class ApplicationComponent implements OnInit {
  private todos:ITodo[];

  constructor(private todoService:TodoService) {}

  ngOnInit() {
    this.todoService.subject$.subscribe((todos) => {
      this.todos = todos;
    })
    this.todoService.getAll();
  }

  addTodo(title:String) {
    this.todoService.add(title);
  }

  toggleTodo(todo:ITodo) {
    this.todoService.toggle(todo);
  }

  removeTodo(todo:ITodo) {
    this.todoService.remove(todo);
  }
}
