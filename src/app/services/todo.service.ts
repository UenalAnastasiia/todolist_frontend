import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  addTodo(title: string | number, description: string | number) {
    const authToken: any = JSON.parse(localStorage.getItem("token") || '"');
    let body = {'title': title, 'description': description, 'author': authToken['id']};
    const url = environment.baseURL + '/todos/';
    return lastValueFrom(this.http.post(url, body));
  }


  deleteTodo(id: number) {
    const url = environment.baseURL + '/todos/' + id;
    return lastValueFrom(this.http.delete(url));
  }
}
