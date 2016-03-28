import { Subject } from "rxjs/Subject"
import { Http, Response } from 'angular2/http';
import { Inject } from "angular2/core"

export interface ITodo {
  id: number;
  title: String;
  completed: Boolean;
  setCompleted():Boolean;
}

export class Todo implements ITodo {
  id:number;
  title:String;
  completed: Boolean;

  constructor(title:String, completed:Boolean, id:number) {
    this.title = title;
    this.completed = completed;
    this.id = id;
  }

  setCompleted():Boolean {
    return (this.completed = !this.completed);
  }
}

export class TodoService {
  public subject$:Subject<any>;
  private todos:ITodo[] = [];
  private nextToDoId:number = 0;

  constructor(@Inject(Http) http:Http) {
    this.subject$ = new Subject();
    this.todos.push(new Todo("Learn Angular 2", true, ++this.nextToDoId));
    this.todos.push(new Todo("Learn RxJS", true, ++this.nextToDoId));
  }
  add(text:String) {
    if (!text.length) return;
    this.todos.unshift(new Todo(text, false, ++this.nextToDoId));
    this.subject$.next(this.todos);
  }

  remove(removeTodo:Todo) {
    this.todos = this.todos.filter((todo:ITodo) => todo.id !== removeTodo.id);
    this.done();
  }

  toggle(todo:ITodo) {
    todo.setCompleted();
    this.done();
  }

  getAll() {
    this.done();
  }

  done() {
    this.subject$.next(this.todos);
  }
}
