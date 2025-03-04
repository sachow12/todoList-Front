import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private apiURL = 'http://localhost:8080/api/v1/todoList';

  constructor(private http: HttpClient) { }

  getTodoList(): Observable<any> {
    return this.http.get(`${this.apiURL}`);
  }

  createTodoList(todoList: Object): Observable<Object> {
    return this.http.post(`${this.apiURL}`, todoList);
  }

  deleteTodoList(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`, { responseType: 'text' });
  }

  putTodoList(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.apiURL}/${id}`, value);
  }

}
