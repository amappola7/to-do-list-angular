import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, take, tap, of } from 'rxjs';
import { FormTask, Task } from 'src/app/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _url: string = 'http://localhost:3000/tasks';

  constructor(private _http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this._http.get<Task[]>(this._url)
    .pipe(
      take(1),
      tap(() => console.log('Petition get tasks succesful'))
    )
  }

  createTask(task: FormTask): Observable<Task> {
    return this._http.post<Task>(this._url, task)
    .pipe(
      take(1),
      tap((result) => console.log('Task created', result)),
      catchError((error) => {
        console.log('error');
        return of(error);
      })
    );
  }

  deleteTask(id: number): Observable<Task> {
    return this._http.delete<Task>(`${this._url}/${id}`)
    .pipe(
      take(1),
      tap((result) => console.log('Task deleted', result)),
      catchError((error) => {
        console.log('error');
        return of(error);
      })
    )
  }
}
