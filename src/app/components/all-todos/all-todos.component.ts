import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.scss']
})
export class AllTodosComponent implements OnInit {
  todos: any = [];
  error = '';
  todoTitle: string = '';
  todoDescription: string = '';

  constructor(private http: HttpClient, private todoService: TodoService) { }

  async ngOnInit() {
    try {
      this.todos = await this.loadTodos();
    } catch(e) {
      this.error = 'Error by loading todos'
    }
  }

  loadTodos() {
    const url = environment.baseURL + '/todos/';
    return lastValueFrom(this.http.get(url));
  }


  addTodo() {
    this.todoService.addTodo(this.todoTitle, this.todoDescription);
    this.todoTitle = '';
    this.todoDescription = '';
  }
}