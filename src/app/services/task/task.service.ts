import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take, tap } from 'rxjs';
import { Task } from 'src/app/models/task';

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
}
