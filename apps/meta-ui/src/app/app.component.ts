import { Component, OnInit } from '@angular/core';
import { Todo } from './meta.interface';
import { MetaService } from './meta.service';


@Component({
  selector: 'meta-lab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];

  newTodo: Todo = {
    title: '',
    description: ''
  };

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.getAll().subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }

  create() {
    if (!this.newTodo.title || !this.newTodo.description) {
      alert('Title & Description are required...');
      return;
    }
    this.metaService.create(this.newTodo).subscribe((todo: Todo) => {
      this.todos.push(todo);
      this.newTodo = {
        title: '',
        description: ''
      }
    })
  }

  deleteTodo(id?: string) {
    if (!id) {
      return;
    }
    if (window.confirm('Are you sure? This action cannot be undone...')) {
      this.metaService.delete(id).subscribe((success: boolean) => {
        if (success) {
          this.todos = this.todos.filter((todo: Todo) => todo.id !== id);
        } else {
          alert('Oops... Something wrong happened...');
        }
      });
    }
  }
}
